import { Navigate, Route, Routes } from "react-router"
import Home from "./Pages/Home"
import Courses from "./Pages/Courses"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Signup from "./Components/Signup"
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"


function App() {

  const [authUser, setauthUser] = useAuth();

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {authUser && <Route path="/" element={<Home />} />}
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </div>
      <Toaster />
    </>
  )
}

export default App
