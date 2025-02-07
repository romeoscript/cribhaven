
import "./App.css";
import Main from "./layout/Main";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";


function App() {

  return (
    <Router>
      <Routes>
        
        {/* Public Routes */}
        <Route path="/" element={<Main />}>
           <Route index element={<Homepage />} />
           <Route path="about" element={<About />} />
           <Route path="admin" element={<AdminDashboard />} />
        </Route>


         </Routes> 
         
    </Router>
  );
}

export default App;