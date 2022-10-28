import React from 'react'
import './buscador.scss';
import '../CheckoutForm/checkoutForm.scss';

function Buscador() {
  return (
    <div>
          <h3>Buscador</h3>
                  <form className="checkout checkoutForm" >
                        <input className='check__input'  type="text" placeholder="Buscar Juegos" />
                  </form>
      </div>
  )
}

export default Buscador;

