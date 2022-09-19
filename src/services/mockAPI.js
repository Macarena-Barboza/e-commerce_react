const data = [
    {
        id: 1,
        titulo: "Horizon Forbidden West",
        descripcion: "Explora tierras remotas, enfréntate a máquinas más grandes e imponentes y descubre increíbles tribus en tu regreso a un futuro lejano en el mundo apocalíptico de Horizon.",
        img:"https://gmedia.playstation.com/is/image/SIEPDC/horizon-forbidden-west-store-art-01-01apr21$en?$1200px$",
        precio:"19600",
        stock: "7",
    },
    {
        id: 2,
        titulo: "Hogwarts Legacy",
        descripcion: "Embárcate en un viaje por localizaciones nuevas mientras exploras y descubres bestias fantásticas, personalizas a tu personaje, dominas nuevos hechizos y te conviertes en el mago que quieres ser.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-packshot-thumb-01-en-12jan21.jpg?$1200px$",
        precio: "19600",
        stock: "4",
    },
    {
        id: 3,
        titulo: "Elden Ring",
        descripcion: "Blande el poder del Círculo de Elden y conviértete en un señor del Círculo en las Tierras Intermedias, gobernadas por la reina Márika la Eterna que fue destruido.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/elden-ring-store-art-01-ps5-03sep21$en?$1200px$",
        precio: "16800",
        stock: "2",
    },
    {
        id: 4,
        titulo: "Gotham Knights",
        descripcion: "Batman ha muerto. Una nueva oleada de crimen en el bajo mundo ha invadido las calles de Ciudad Gótica.Ahora depende de la batifamilia proteger Ciudad Gótica y llevar esperanza a sus habitantes.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/gotham-knights-store-art-01-02nov21$en?$1200px$",
        precio: "19600",
        stock: "5",
    },
    {
        id: 5,
        titulo: "God of War Ragnarök",
        descripcion: "Atreus busca conocimiento que lo ayude a entender la profecía de Loki y establecer su rol en Ragnarök. Kratos debe decidir entre quedarse atado al miedo de repetir sus errores o librarse del pasado para ser el padre que Atreus necesita.",
        img: "https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-listing-thumb-01-09sep21$en?$1200px$",
        precio: "19600",
        stock: "3",
    },
    {
        id: 6,
        titulo: "The Last of Us",
        descripcion: "En una civilización devastada, donde los infectados y los empedernidos sobrevivientes proliferan, Joel, es contratado para rescatar de contrabando a una niña de 14 años llamada Ellie de una zona de cuarentena militar.",
        img: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/0kRqUeSBIbQzz7cen3c989c6.jpg",
        precio: "19600",
        stock: "2",
    },
]

export default function getItems () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}