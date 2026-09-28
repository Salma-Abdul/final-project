import { Link } from "react-router-dom";

function Sidebar() {
  const linkStyle = {
    display: "block",
    padding: "13px 18px",
    marginBottom: "6px",
    color: "#dcecf7",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "14px",
  };

  return (
    <aside
      style={{
        width: "240px",
        minHeight: "100vh",
        background: "#123b5d",
        padding: "25px 15px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          padding: "0 18px",
          marginBottom: "30px",
        }}
      >
        BIDMAH
      </div>

      <Link to="/dashboard" style={linkStyle}>
        🏠 Dashboard
      </Link>

      <Link to="/projects" style={linkStyle}>
        📁 Projects
      </Link>

      <Link to="/site-reports" style={linkStyle}>
        📋 Site Reports
      </Link>

      <Link to="/materials" style={linkStyle}>
        📦 Materials
      </Link>

      <Link to="/expenses" style={linkStyle}>
        💰 Expenses
      </Link>

      <Link to="/attendance" style={linkStyle}>
        👥 Attendance
      </Link>

      <Link to="/documents" style={linkStyle}>
        📄 Documents
      </Link>

      <Link to="/users" style={linkStyle}>
        👤 Users
      </Link>

      <div
        style={{
          borderTop: "1px solid #315872",
          marginTop: "25px",
          paddingTop: "20px",
        }}
      >
        <Link to="/" style={linkStyle}>
          🚪 Logout
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar;