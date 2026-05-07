export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #000000, #111111, #1a1a1a)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        color: "white",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "rgba(255,255,255,0.05)",
          border: "2px solid #ff8800",
          borderRadius: "30px",
          padding: "50px",
          boxShadow: "0 0 40px rgba(255,136,0,0.4)",
          textAlign: "center",
          backdropFilter: "blur(10px)",
        }}
      >
        <img
          src="https://i.imgur.com/0y0y0y0.png"
          alt="logo"
          style={{
            width: "120px",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            fontSize: "55px",
            color: "#00ff88",
            marginBottom: "20px",
            textShadow: "0 0 20px #00ff88",
          }}
        >
          COLABORADOR ACTIVO
        </h1>

        <h2
          style={{
            fontSize: "40px",
            marginBottom: "10px",
          }}
        >
          JHON JAIRO
        </h2>

        <h3
          style={{
            fontSize: "35px",
            color: "#ff8800",
            marginBottom: "40px",
          }}
        >
          CORPUS YATACUE
        </h3>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "25px",
            borderRadius: "20px",
            marginBottom: "25px",
          }}
        >
          <p style={{ fontSize: "24px" }}>
            <strong>EMPRESA:</strong>
            <br />
            PALACIOS CONSTRUCTORES S.A.S.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <p style={{ fontSize: "24px" }}>
            <strong>CARGO:</strong>
            <br />
            OFICIAL
          </p>
        </div>
      </div>
    </div>
  );
}