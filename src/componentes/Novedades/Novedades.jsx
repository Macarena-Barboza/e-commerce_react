import React from 'react'
import './novedades.scss';
import'../Carrito/carrito.scss';
import ReactPlayer from "react-player";
import'../ItemDetail/ItemDetail.scss'

function Novedades() {
  return (
    <div className='carrito'>
          <h1>Novedades</h1>
          <section className='novedades'>
              <h4>Wrath of the Lich King Classic se lanzará este <span>26 de Septiembre</span> </h4>
              <p>Desde lo alto del trono helado de la Ciudadela de la Corona de Hielo, el Rey Exánime Arthas Menethil, un expríncipe paladín consumido y corrompido por el fervor erróneo de querer salvar a su pueblo bajo cualquier costo, prepara su ejército de no-muertos para comenzar una guerra contra los habitantes de Azeroth.</p>
              <div className="novedades__trailer">
                  <ReactPlayer url="https://www.youtube.com/watch?v=J7VBka-A3hc" />
              </div>
            
              <h4>Starfield (Xbox Series X/S y PC) <span>11 de noviembre</span></h4>
              <p>En este juego de rol de próxima generación ambientado entre las estrellas, podrás crear el personaje que desees y explorar con una libertad sin precedentes mientras te embarcas en un viaje épico para desentrañar el mayor misterio de la humanidad.</p>
              <div className="novedades__trailer">
                  <ReactPlayer url="https://www.youtube.com/watch?v=B1e1X570Ni4" />
              </div>
            
              <h4>Valkyrie Elysium (PS4, PS5 y PC)  <span>11 de noviembre</span></h4>
              <p>El mundo está al borde de la destrucción mientras comienza la historia de una nueva Valquiria. Valkyrie Elysium es la más reciente entrega de la serie “Valkyrie” que representa la “muerte de la humanidad” y “la existencia de los dioses” con una cosmovisión única basada en la mitología nórdica. </p>
              <div className="novedades__trailer">
                  <ReactPlayer url="https://www.youtube.com/watch?v=Ve_JJ5uH72A" />
              </div>
            
              <h4>World of Warcraft: Dragonflight (PC) <span>29 de noviembre</span></h4>
              <p>Ya está disponible en todo el mundo y está incluido con tu suscripción a WoW sin coste adicional. Vuelve a Rasganorte con estilo con la mejora opcional de Rasganorte y recibe un subida de personaje hasta el nivel 70 y más cosas para ayudarte en tu aventura. ¡Conquista ya los baldíos helados!</p>
              <div className="novedades__trailer">
                  <ReactPlayer url="https://www.youtube.com/watch?v=g5qa5Db-S2g" />
              </div>
          </section>
    </div>
)
}

export default Novedades