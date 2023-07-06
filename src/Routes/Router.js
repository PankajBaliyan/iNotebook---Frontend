import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';
import NoteState from '../context/notes/NoteState';
import Alert from '../components/Alert';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NoteState>
                <Navbar />
                <Alert message="Hello World" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </NoteState>
        </BrowserRouter>
    );
};

export default AppRouter;
