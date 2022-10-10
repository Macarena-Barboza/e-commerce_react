import './card.scss';
import {Link} from 'react-router-dom';
import {FaStar } from 'react-icons/fa';
import FormatPrice from '../Productos/Precio'


function Card(props) {
  let { precio, titulo, img, id, reseña} = props;
  const urlUnica= `/fantasia/${id}`
  return (
    // <div>
    <>
      <div className="card" key={id}>
        <Link to= {urlUnica}>
          <img src={img} alt={titulo}/>
        </Link> 

        <div className="card__description">
            <h2>{titulo}</h2>
            <div className="card__description__cont">
              <h3>{FormatPrice(precio)}</h3>
              <p className="card__description__star"><FaStar className='star'/>{reseña}</p>
            </div>
        </div>
      </div>
    
    </>
    // </div>
  )
}
export default Card

