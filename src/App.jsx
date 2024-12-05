import './App.css'
import TodoList from './domain/todoList/index'
import StateCitySelector from './domain/stateCitySelector'
import PostSelector from './domain/postSelector'
import { Route, Routes } from 'react-router-dom'
import Nav from './domain/navBar'
import Home from './domain/home'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts-select" element={<PostSelector />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/state-city" element={<StateCitySelector />} />
      </Routes>
      </>
  )
}

export default App
