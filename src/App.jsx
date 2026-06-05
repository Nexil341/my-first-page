import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/o-mnie" element={<About />} />
                <Route path="/projekty" element={<Projects />} />
                <Route path="/umiejetnosci" element={<Skills />} />
                <Route path="/kontakt" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}