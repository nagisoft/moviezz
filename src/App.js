import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<UserList />} />
        <Route path="*" element={<Home />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
