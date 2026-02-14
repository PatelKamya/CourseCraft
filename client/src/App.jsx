import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseCard from './components/CourseCard';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CourseCard />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
