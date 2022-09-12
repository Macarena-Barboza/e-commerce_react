import Card from './Card';
import './card.css';

function ItemListContainer({greeting}) {
  return (
    <div>
        <h1>{greeting}</h1>
        <section>
            <Card
            img="https://gmedia.playstation.com/is/image/SIEPDC/horizon-forbidden-west-store-art-01-01apr21$en?$1200px$"
            titulo="Horizon Forbidden West"
            descripcion="Explora tierras remotas, enfréntate a máquinas más grandes e imponentes y descubre increíbles tribus en tu regreso a un futuro lejano en el mundo apocalíptico de Horizon."
            precio={19600}/>
        
            <Card
            img="https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-packshot-thumb-01-en-12jan21.jpg?$1200px$"
            titulo="Hogwarts Legacy"
            descripcion="Embárcate en un viaje por localizaciones nuevas mientras exploras y descubres bestias fantásticas, personalizas a tu personaje, dominas nuevos hechizos y te conviertes en el mago que quieres ser."
            precio={19600}/>
            <Card
            img="https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-store-art-01-ps5-03sep21$en?$1200px$"
            titulo="Elden Ring"
            descripcion="Blande el poder del Círculo de Elden y conviértete en un señor del Círculo en las Tierras Intermedias, gobernadas por la reina Márika la Eterna que fue destruido."
            precio={16800}/>
            <Card
            img="https://gmedia.playstation.com/is/image/SIEPDC/gotham-knights-store-art-01-02nov21$en?$1200px$"
            titulo="Gotham Knights"
            descripcion="Batman ha muerto. Una nueva oleada de crimen en el bajo mundo ha invadido las calles de Ciudad Gótica.Ahora depende de la batifamilia proteger Ciudad Gótica y llevar esperanza a sus habitantes."
            precio={19600}/>
            <Card
            img="https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-listing-thumb-01-09sep21$en?$1200px$"
            titulo="God of War Ragnarök"
            descripcion="Atreus busca conocimiento que lo ayude a entender la profecía de Loki y establecer su rol en Ragnarök. Kratos debe decidir entre quedarse atado al miedo de repetir sus errores o librarse del pasado para ser el padre que Atreus necesita."
            precio={19600}/>
        
        </section>
    </div>
  );
}

export default ItemListContainer