import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update" element={<Update/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
