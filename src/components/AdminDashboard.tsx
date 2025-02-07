import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Search, ListPlus, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import Papa from 'papaparse';

// Interface definitions
interface SummaryData {
  findLodgeRequests: number;
  findRoommateRequests: number;
  listLodgeRequests: number;
  total: number;
}

interface BaseLodgeData {
  id: number;
  first_name: string;
  last_name: string;
  email_address: string;
  phone_number: string;
  location: string;
  budget: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
}

interface FindLodgeData extends BaseLodgeData {
  room_type: string;
  requirement: string;
}

interface FindRoommateData extends BaseLodgeData {
  roommate_gender: string;
  requirement: string;
}

interface ListLodgeData extends BaseLodgeData {
  caretaker_contact: string;
  description: string;
}

interface ApiResponse<T> {
  status: 'success' | 'error';
  data: T;
  error?: string;
}
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ITEMS_PER_PAGE = 10;

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex flex-col sm:flex-row items-center justify-between px-2 py-4 gap-4">
    <Button
      variant="outline"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage <= 1}
      className="w-full sm:w-auto"
    >
      <ChevronLeft className="h-4 w-4 mr-2" />
      Previous
    </Button>
    <span className="text-sm">
      Page {currentPage} of {totalPages}
    </span>
    <Button
      variant="outline"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage >= totalPages}
      className="w-full sm:w-auto"
    >
      Next
      <ChevronRight className="h-4 w-4 ml-2" />
    </Button>
  </div>
);


const AdminDashboard: React.FC = () => {
  const [summary, setSummary] = useState<SummaryData>({
    findLodgeRequests: 0,
    findRoommateRequests: 0,
    listLodgeRequests: 0,
    total: 0
  });
  const [findLodgeData, setFindLodgeData] = useState<FindLodgeData[]>([]);
  const [findRoommateData, setFindRoommateData] = useState<FindRoommateData[]>([]);
  const [listLodgeData, setListLodgeData] = useState<ListLodgeData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const [summaryRes, findLodgeRes, findRoommateRes, listLodgeRes] = await Promise.all([
        fetch('https://cribhavenbackend.onrender.com/api/summary'),
        fetch('https://cribhavenbackend.onrender.com/api/getlodge'),
        fetch('https://cribhavenbackend.onrender.com/api/getroommate'),
        fetch('https://cribhavenbackend.onrender.com/api/getlistings')
      ]);

      const [
        summaryData,
        findLodgeData,
        findRoommateData,
        listLodgeData
      ]: [
          ApiResponse<SummaryData>,
          ApiResponse<FindLodgeData[]>,
          ApiResponse<FindRoommateData[]>,
          ApiResponse<ListLodgeData[]>
        ] = await Promise.all([
          summaryRes.json(),
          findLodgeRes.json(),
          findRoommateRes.json(),
          listLodgeRes.json()
        ]);

      setSummary(summaryData.data);
      setFindLodgeData(findLodgeData.data || []);
      setFindRoommateData(findRoommateData.data || []);
      setListLodgeData(listLodgeData.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };



  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };


  // Function to download CSV
  const downloadCSV = (data: any[], filename: string) => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const sortDataByDate = <T extends BaseLodgeData>(data: T[]): T[] => {
    return [...data].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
  };

  // Function to paginate data
  const paginateData = <T extends BaseLodgeData>(data: T[]): T[] => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortDataByDate(data).slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  // Calculate total pages
  const getTotalPages = (totalItems: number): number => {
    return Math.ceil(totalItems / ITEMS_PER_PAGE);
  };

  // Update the Table rendering section with responsive classes
  const renderTable = (
    data: any[],
    columns: { key: string, label: string }[],
    filename: string
  ) => {
    const paginatedData = paginateData(data);
    const totalPages = getTotalPages(data.length);

    return (
      <div className="w-full">
        <TableActions data={data} filename={filename} />
        {/* Add a container with horizontal scroll */}
        <div className="relative w-full overflow-auto border rounded-lg">
          <div className="min-w-full align-middle">
            <Table>
              <TableHeader>
                <TableRow>
                  {columns.map((col) => (
                    <TableHead
                      key={col.key}
                      className="px-4 py-3 text-left text-sm font-medium whitespace-nowrap"
                    >
                      {col.label}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((item) => (
                  <TableRow key={item.id}>
                    {columns.map((col) => (
                      <TableCell
                        key={`${item.id}-${col.key}`}
                        className="px-4 py-3 text-sm whitespace-nowrap"
                      >
                        {col.key === 'name'
                          ? `${item.first_name} ${item.last_name}`
                          : col.key === 'date'
                            ? formatDate(item.createdAt)
                            : item[col.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  };

  // Update TableActions to be more responsive
  const TableActions = ({ data, filename }: { data: any[], filename: string }) => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
      <Select
        value={sortOrder}
        onValueChange={(value: 'asc' | 'desc') => setSortOrder(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="desc">Newest First</SelectItem>
          <SelectItem value="asc">Oldest First</SelectItem>
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        onClick={() => downloadCSV(data, filename)}
        className="w-full sm:w-auto"
      >
        <Download className="h-4 w-4 mr-2" />
        Download CSV
      </Button>
    </div>
  );

  // Update Pagination to be responsive


  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  const findLodgeColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email_address', label: 'Email' },
    { key: 'phone_number', label: 'Phone' },
    { key: 'location', label: 'Location' },
    { key: 'budget', label: 'Budget' },
    { key: 'room_type', label: 'Room Type' },
    { key: 'date', label: 'Date' }
  ];

  const findRoommateColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email_address', label: 'Email' },
    { key: 'phone_number', label: 'Phone' },
    { key: 'location', label: 'Location' },
    { key: 'budget', label: 'Budget' },
    { key: 'roommate_gender', label: 'Preferred Gender' },
    { key: 'date', label: 'Date' }
  ];

  const listLodgeColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email_address', label: 'Email' },
    { key: 'phone_number', label: 'Phone' },
    { key: 'location', label: 'Location' },
    { key: 'budget', label: 'Budget' },
    { key: 'caretaker_contact', label: 'Caretaker Contact' },
    { key: 'date', label: 'Date' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Find Lodge</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.findLodgeRequests}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Find Roommate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.findRoommateRequests}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">List Lodge</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.listLodgeRequests}</div>
          </CardContent>
        </Card>
      </div>

      {/* Data Tables */}
      <Tabs defaultValue="findLodge" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="findLodge">
            <Search className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Find Lodge Requests</span>
            <span className="sm:hidden">Lodge</span>
          </TabsTrigger>
          <TabsTrigger value="findRoommate">
            <Users className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Find Roommate Requests</span>
            <span className="sm:hidden">Roommate</span>
          </TabsTrigger>
          <TabsTrigger value="listLodge">
            <ListPlus className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Lodge Listings</span>
            <span className="sm:hidden">Listings</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="findLodge">
          {renderTable(findLodgeData, findLodgeColumns, 'lodge_requests.csv')}
        </TabsContent>

        <TabsContent value="findRoommate">
          {renderTable(findRoommateData, findRoommateColumns, 'roommate_requests.csv')}
        </TabsContent>

        <TabsContent value="listLodge">
          {renderTable(listLodgeData, listLodgeColumns, 'lodge_listings.csv')}
        </TabsContent>
      </Tabs>

    </div>
  );
};

export default AdminDashboard;