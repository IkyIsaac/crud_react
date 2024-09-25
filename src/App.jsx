import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
// import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
