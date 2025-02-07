import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Users, Search, ListPlus } from 'lucide-react';

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const [summaryRes, findLodgeRes, findRoommateRes, listLodgeRes] = await Promise.all([
        fetch('http://localhost:3000/api/summary'),
        fetch('http://localhost:3000/api/getlodge'),
        fetch('http://localhost:3000/api/getroommate'),
        fetch('http://localhost:3000/api/getlistings')
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

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

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
            Find Lodge Requests
          </TabsTrigger>
          <TabsTrigger value="findRoommate">
            <Users className="w-4 h-4 mr-2" />
            Find Roommate Requests
          </TabsTrigger>
          <TabsTrigger value="listLodge">
            <ListPlus className="w-4 h-4 mr-2" />
            Lodge Listings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="findLodge">
          <div className="overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Room Type</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {findLodgeData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{`${item.first_name} ${item.last_name}`}</TableCell>
                    <TableCell>{item.email_address}</TableCell>
                    <TableCell>{item.phone_number}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.budget}</TableCell>
                    <TableCell>{item.room_type}</TableCell>
                    <TableCell>{formatDate(item.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="findRoommate">
          <div className="overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Preferred Gender</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {findRoommateData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{`${item.first_name} ${item.last_name}`}</TableCell>
                    <TableCell>{item.email_address}</TableCell>
                    <TableCell>{item.phone_number}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.budget}</TableCell>
                    <TableCell>{item.roommate_gender}</TableCell>
                    <TableCell>{formatDate(item.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="listLodge">
          <div className="overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Caretaker Contact</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listLodgeData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{`${item.first_name} ${item.last_name}`}</TableCell>
                    <TableCell>{item.email_address}</TableCell>
                    <TableCell>{item.phone_number}</TableCell>
                    <TableCell>{item.location}</TableCell>
                    <TableCell>{item.budget}</TableCell>
                    <TableCell>{item.caretaker_contact}</TableCell>
                    <TableCell>{formatDate(item.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;