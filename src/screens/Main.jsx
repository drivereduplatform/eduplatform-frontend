import { Link } from 'react-router-dom'

function Main() {
  return (
    <div>
      Main page placeholder <br />
      <Link to="/login">Login</Link> <br />
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Main
