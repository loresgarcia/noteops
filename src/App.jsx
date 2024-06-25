import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </Router>
    );
}

export default App;
