import React from "react";
import "./App.css";
import UserList from "./components/UserList"; // Import the UserList component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PetProfiles from "./pages/PetProfiles";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main>
        <header className="App-header">
          <h1>Pet Connect App</h1>
        </header>
        <UserList /> {/* Display the user list */}
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetProfiles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>

      {/* Footer Section */}
      <Footer />
    </Router>
  );
}

export default App;

