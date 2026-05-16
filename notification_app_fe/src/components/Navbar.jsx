import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "16px 20px",
        backgroundColor: "#1976d2",
        flexWrap: "wrap",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        All Notifications
      </Link>

      <Link
        to="/priority"
        style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Priority Notifications
      </Link>
    </div>
  );
}

export default Navbar;