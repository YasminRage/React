import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Users from './Users'
import Products from './Products'

function Home() {
  return <h1>Home</h1>
}

function NotFound() {
  return <h1>Page not found</h1>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/users">Users</Link>{' '}
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App