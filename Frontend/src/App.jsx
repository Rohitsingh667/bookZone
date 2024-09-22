import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Courses from "./courses/Courses"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider"

function App() {
  const [authUser,setAuthUser] = useAuth()

 return (
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={authUser?<Courses/>:<Navigate to="/login"/>} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Toaster />
      </div>
  );
}

export default App;
