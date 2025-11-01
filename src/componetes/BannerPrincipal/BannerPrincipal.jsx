import React from 'react'
import './BannerPrincipal.css' // importa el CSS que viene abajo

const BannerPrincipal = () => {
  return (
    <div className="banner w-100 d-flex flex-column align-items-center justify-content-center text-center">
      <img
        src="/imagenes/banda.jpg"
        alt="imagen principal"
        className="banner-img"
      />
    </div>
  )
}

export default BannerPrincipal
