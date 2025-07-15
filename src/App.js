import logo from './logo.svg';
import './App.css';
import Viewproducts from './components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addproducts from './components/Addproducts';
import ViewAll from './components/Viewall';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addproducts/>} />
      <Route path='/add' element={<Addproducts/>} />
      <Route path='/view' element={<ViewAll/>} />
      <Route path='/search' element={<Search/>} />
      <Route path='/delete' element={<Delete/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
