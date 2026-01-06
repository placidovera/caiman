import React from 'react'

const canciones = [
  {
    titulo: 'Mentidor',
    duracion: '3:20',
    url: 'https://open.spotify.com/album/47mxStLb8V8iFyKZInlw1e?si=o2kFg4RYQuiBEGwP0gpQ1w'
  },
  {
    titulo: 'Revelación',
    duracion: '4:05',
    url: 'https://open.spotify.com/intl-es/track/6CZnT2mIng4GFrkEp2eZnQ'
  },
  {
    titulo: 'Condena',
    duracion: '2:58',
    url: 'https://open.spotify.com/intl-es/track/0cpLk4ZGHaTfg7bdqOMnPC'
  },
  {
    titulo: 'El viaje de Lucy',
    duracion: '2:58',
    url: 'https://open.spotify.com/intl-es/track/5zrKSyVaKr9THwIyzcKMlr'
  },
  {
    titulo: 'Ácida',
    duracion: '2:58',
    url: 'https://open.spotify.com/intl-es/track/7rr1u8nkNPdrDgbdTzeAcw'
  }
]

const Spoty = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ marginTop: '200px' }}
    >
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card bg-black text-white shadow rounded-4 p-3">

          {/* Título */}
          <h5 className="text-center mb-3">Spotify</h5>

          {/* Lista */}
          <ul className="list-group list-group-flush">
            {canciones.map((cancion, index) => (
              <li
                key={index}
                className="list-group-item bg-black text-white d-flex justify-content-between align-items-center p-2"
              >
                <a
                  href={cancion.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none flex-grow-1"
                >
                  🎵 {cancion.titulo}
                </a>
                <small className="ms-2">{cancion.duracion}</small>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Spoty
