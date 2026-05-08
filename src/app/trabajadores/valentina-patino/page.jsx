// src/app/trabajadores/valentina-patino/page.jsx

export default function Page() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <img
          src="/fotos/valentina.jpg"
          alt="Valentina Patiño"
          style={styles.image}
        />

        <h1 style={styles.status}>
          COLABORADOR ACTIVO
        </h1>

        <h2 style={styles.name}>
          VALENTINA
        </h2>

        <h3 style={styles.lastname}>
          PATIÑO
        </h3>

        <div style={styles.infoBox}>
          <p style={styles.text}>
            PALACIOS CONSTRUCTORES S.A.S.
          </p>
        </div>

        <div style={styles.infoBox}>
          <p style={styles.text}>
            CARGO: ADMINISTRATIVA
          </p>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#000,#111,#1f1f1f)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial",
  },

  card: {
    width: "100%",
    maxWidth: "700px",
    background: "rgba(255,255,255,0.05)",
    border: "2px solid orange",
    borderRadius: "35px",
    padding: "30px 20px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 0 35px orange",
  },

  image: {
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid orange",
    marginBottom: "30px",
    boxShadow: "0 0 25px orange",
  },

  status: {
    color: "#00ff99",
    fontSize: "clamp(40px,8vw,80px)",
    lineHeight: "1",
    marginBottom: "30px",
    fontWeight: "900",
  },

  name: {
    fontSize: "clamp(28px,6vw,55px)",
    marginBottom: "10px",
  },

  lastname: {
    color: "orange",
    fontSize: "clamp(24px,5vw,45px)",
    marginBottom: "40px",
  },

  infoBox: {
    background: "rgba(255,255,255,0.06)",
    padding: "25px",
    borderRadius: "25px",
    marginBottom: "20px",
  },

  text: {
    fontSize: "clamp(18px,4vw,30px)",
    margin: 0,
  },
};