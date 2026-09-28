import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#f4f8f7",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          background: "#123c3a",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "38px", marginBottom: "15px" }}>
          BIDMAH
        </h1>

        <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>
          Construction Operations
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            maxWidth: "420px",
          }}
        >
          Manage projects, site reports, materials, expenses and
          attendance from one simple dashboard.
        </p>

        <p style={{ marginTop: "25px", opacity: 0.8 }}>
          Simple • Mobile • Accountable
        </p>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            background: "white",
            padding: "45px",
            borderRadius: "15px",
            boxShadow: "0 5px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#173b39",
              marginBottom: "10px",
            }}
          >
            Welcome back
          </h1>

          <p
            style={{
              textAlign: "center",
              color: "#71807f",
              marginBottom: "30px",
            }}
          >
            Sign in to your Bidmah account
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#173b39",
                fontWeight: "bold",
              }}
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "20px",
                border: "1px solid #d5e0de",
                borderRadius: "9px",
                boxSizing: "border-box",
                fontSize: "15px",
              }}
            />

            {/* Password */}
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#173b39",
                fontWeight: "bold",
              }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "14px",
                marginBottom: "25px",
                border: "1px solid #d5e0de",
                borderRadius: "9px",
                boxSizing: "border-box",
                fontSize: "15px",
              }}
            />

            {/* Sign In */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                background: "#159a8c",
                color: "white",
                border: "none",
                borderRadius: "9px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </form>

          <p
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: "#9aa7a7",
              fontSize: "12px",
            }}
          >
            BIDMAH Construction Operations System
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;