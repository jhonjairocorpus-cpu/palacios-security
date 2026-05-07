export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#000,#111,#222)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          background: "rgba(255,255,255,0.05)",
          border: "2px solid orange",
          borderRadius: "30px",
          padding: "50px",
          textAlign: "center",
          color: "white",
          boxShadow: "0 0 30px orange",
        }}
      >
        <h1
          style={{
            color: "#00ff88",
            fontSize: "60px",
            marginBottom: "20px",
          }}
        >
          COLABORADOR ACTIVO
        </h1>

        <h2
          style={{
            fontSize: "45px",
            marginBottom: "10px",
          }}
        >
          JHON JAIRO
        </h2>

        <h3
          style={{
            color: "orange",
            fontSize: "35px",
            marginBottom: "40px",
          }}
        >
          CORPUS YATACUE
        </h3>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <p style={{ fontSize: "25px" }}>
            PALACIOS CONSTRUCTORES S.A.S.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "20px",
          }}
        >
          <p style={{ fontSize: "25px" }}>
            CARGO: OFICIAL
          </p>
        </div>
      </div>
    </div>
  );
}