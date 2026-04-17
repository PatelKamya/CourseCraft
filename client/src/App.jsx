import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard'
import Layout from './components/Layout';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<CourseCard />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
