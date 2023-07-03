import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';
import NoteState from '../context/notes/NoteState';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NoteState>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </NoteState>
        </BrowserRouter>
    );
};

export default AppRouter;
