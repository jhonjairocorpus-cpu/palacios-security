// src/app/trabajadores/keiner-guerrero/page.jsx

export default function Page() {
  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg,#000000,#111111,#1f1f1f)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      padding:"20px",
      fontFamily:"Arial"
    }}>
      <div style={{
        width:"100%",
        maxWidth:"700px",
        background:"rgba(255,255,255,0.05)",
        border:"2px solid orange",
        borderRadius:"35px",
        padding:"30px 20px",
        textAlign:"center",
        color:"white",
        boxShadow:"0 0 35px orange"
      }}>
        <h1 style={{
          color:"#00ff99",
          fontSize:"clamp(40px,8vw,80px)",
          lineHeight:"1",
          marginBottom:"30px",
          fontWeight:"900"
        }}>
          COLABORADOR<br/>ACTIVO
        </h1>

        <h2 style={{
          fontSize:"clamp(28px,6vw,55px)",
          marginBottom:"10px"
        }}>
          KEINER
        </h2>

        <h3 style={{
          color:"orange",
          fontSize:"clamp(24px,5vw,45px)",
          marginBottom:"40px"
        }}>
          GUERRERO
        </h3>

        <div style={{
          background:"rgba(255,255,255,0.06)",
          padding:"25px",
          borderRadius:"25px",
          marginBottom:"20px"
        }}>
          <p style={{
            fontSize:"clamp(18px,4vw,30px)",
            margin:0
          }}>
            PALACIOS CONSTRUCTORES S.A.S.
          </p>
        </div>

        <div style={{
          background:"rgba(255,255,255,0.06)",
          padding:"25px",
          borderRadius:"25px"
        }}>
          <p style={{
            fontSize:"clamp(18px,4vw,30px)",
            margin:0
          }}>
            CARGO: COLABORADOR
          </p>
        </div>
      </div>
    </div>
  );
}