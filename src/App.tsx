import Navbar from "./components/navbar";
import Homepage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import { Routes,Route } from "react-router-dom";
function App() {
let name:string = "George"
  return (
    <>
    <Navbar name={name}/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
      {/* <Homepage></Homepage>
      <ContactPage/>
      <AboutPage/> */}
    </>
  )
}
export default App