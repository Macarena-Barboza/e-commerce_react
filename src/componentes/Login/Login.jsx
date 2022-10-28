import './Login.scss';
import '../Carrito/carrito.scss';
import '../CheckoutForm/checkoutForm.scss'

function Login() {
  return (
    <div className='carrito'>
          <h1>regístrate</h1>
          <div className="login">
            <p className='login__text'>Para recibir más promociones y noticias de último momento.</p>
            <div className="checkout">
              <form action="" className='login__form'>
                  <div className="checkout__input">
                      <label htmlFor="email">Email</label>
                      <input name="email" type="email" placeholder="Email" required />
                  </div>
                  <div className="checkout__input">
                      <label htmlFor="email">Contraseña</label>
                      <input name="password" type="password" placeholder="Contraseña" minLength={8} required />
                  </div>
                  <div className="login__btns">
                    <button className="btn">Iniciar Sesion</button>
                    <div className="btn__regis">
                      <p>¿No tienes cuenta?</p><button className="btn__ini">regístrate</button>
                    </div>
                  </div>
              </form>
            </div>
          </div>
    </div>
  )
}

export default Login