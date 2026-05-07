export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-white/10 p-12 rounded-3xl border border-cyan-400 text-center">
        <span className="bg-green-500 text-black px-6 py-3 rounded-full text-2xl font-black">
          COLABORADOR ACTIVO
        </span>

        <h1 className="text-5xl font-black mt-8">
          JOHAN SEBASTIAN
        </h1>

        <h2 className="text-4xl text-orange-400 font-bold">
          GUEVARA
        </h2>

        <div className="mt-8 space-y-4 text-2xl">
          <p><b>EMPRESA:</b> PALACIOS CONSTRUCTORES S.A.S.</p>
          <p><b>CARGO:</b> OFICIAL</p>
        </div>
      </div>
    </div>
  )
}