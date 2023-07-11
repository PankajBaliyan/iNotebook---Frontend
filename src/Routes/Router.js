import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import About from '../components/About';
import NoteState from '../context/notes/NoteState';
import Alert from '../components/Alert';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useState } from 'react';

const AppRouter = () => {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            message,
            type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };
    return (
        <BrowserRouter>
            <NoteState>
                <Navbar />
                <Alert alert={alert} />
                <Routes>
                    <Route path="/" element={<Home showAlert={showAlert} />} />
                    <Route
                        path="/about"
                        element={<About showAlert={showAlert} />}
                    />
                    <Route
                        path="/login"
                        element={<Login showAlert={showAlert} />}
                    />
                    <Route
                        path="/signup"
                        element={<Signup showAlert={showAlert} />}
                    />
                </Routes>
            </NoteState>
        </BrowserRouter>
    );
};

export default AppRouter;
