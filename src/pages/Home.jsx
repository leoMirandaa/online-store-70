import { Link } from "react-router"

function Home() {
  return (
    <div>
      <h1>Welcome to my online store!</h1>
      <p>Discover amazing products at incredible prices.</p>

      <div className="d-flex flex-column align-items-center">
        <img width={600} src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <Link className="btn btn-dark" to="/catalog">Visit our catalog</Link>
      </div>

    </div>
  )
}

export default Home;