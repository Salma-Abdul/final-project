function Navbar() {
  return (
    <nav
      style={{
        height: "70px",
        background: "#123b5d",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        BIDMAH
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "#1976d2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          CO
        </div>

        <div>
          <div style={{ fontWeight: "bold" }}>
            Company Owner
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#c9dce9",
            }}
          >
            Admin
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;