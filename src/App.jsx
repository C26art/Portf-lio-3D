import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import  Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { About, Contact, Home, Projects } from "./pages";
import Future from "./pages/Future";


const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Navbar />
                <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/future' element={<Future />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
};

export default App;