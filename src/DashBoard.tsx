import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <p>Current user: {user?.email}</p>

      <Link to="/exercise1">Exercise 1</Link>
      <br />
      <Link to="/exercise2">Exercise 2</Link>

      <br /><br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;