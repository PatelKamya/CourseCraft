import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/card' element={<CourseCard />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
