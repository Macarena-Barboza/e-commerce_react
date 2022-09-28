const data = [
    {
        id: 1,
        titulo: "Horizon Forbidden West",
        descripcion: "Aloy en su legendaria búsqueda para desentrañar los misterios de un mundo gobernado por máquinas mortales.Explora tierras remotas, enfréntate a máquinas más grandes e imponentes y descubre increíbles tribus en tu regreso a un futuro lejano en el mundo apocalíptico de Horizon.",
        img:"/assets/horizon1.jpg",
        precio:"19600",
        stock: "7",
        categoria:"accion",
        reseña:"4,9",
        características: "Un jugador",
    },
    {
        id: 2,
        titulo: "Hogwarts Legacy",
        descripcion: "Embárcate en un viaje por localizaciones nuevas mientras exploras y descubres bestias fantásticas, personalizas a tu personaje. Aprende hechizos, elabora pociones, cultiva plantas y cuida de animales fantásticos a lo largo del viaje. Sé seleccionado para tu casa, forja relaciones y aprende las habilidades que te conducirán a convertirte en el mago o bruja que quieras ser.",
        img: "/assets/hogwarts1.jpg",
        images: "/assets/hogwarts3.jpg",
        precio: "19600",
        stock: "4",
        categoria:"fantasia",
        reseña:"4,5",
        características: "Un jugador",
    },
    {
        id: 3,
        titulo: "God of War Ragnarök",
        descripcion: "Atreus busca conocimiento que lo ayude a entender la profecía de Loki y establecer su rol en Ragnarök. Kratos debe decidir entre quedarse atado al miedo de repetir sus errores o librarse del pasado para ser el padre que Atreus necesita. Viaja a un mundo oscuro y elemental de criaturas temibles.Este entorno inequívocamente nuevo, con su propio panteón de criaturas, monstruos y dioses, nos lleva desde las columnas de mármol del fastuoso Olimpo hasta los bosques agrestes, las montañas y las cuevas de la tradición nórdica anterior a los vikingos. ",
        img: "/assets/god-war1.jpg",
        precio: "19600",
        stock: "3",
        categoria:"accion",
        reseña:"4,9",
        características: "Un jugador",
    },
    {
        id: 4,
        titulo: "The Last of Us II",
        descripcion: "Cinco años después de su peligroso viaje a través de unos Estados Unidos pospandemia, Ellie y Joel logran establecerse en Jackson, Wyoming. Vivir entre una próspera comunidad de sobrevivientes les ha concedido paz y estabilidad, a pesar de la amenaza constante de los infectados y de otros sobrevivientes más desesperados.Cuando un evento violento interrumpe esa paz, Ellie se embarca en un viaje incesante para obtener justicia y llegar a un cierre. A medida que caza a los responsables uno por uno, deberá enfrentarse a las devastadoras repercusiones físicas y emocionales de sus acciones..",
        img: "/assets/the-last_1.jpg",
        precio: "19600",
        stock: "2",
        categoria:"accion",
        reseña:"3,8",
        características: "Un jugador",
    },
    {
        id: 5,
        titulo: "Lost in Random",
        descripcion: "Un reino oscuro en el que el futuro de los ciudadanos lo determina la tirada de un dado. ¿Sucumbirás a tu destino o aprenderás a utilizar el caos en tu favor? Embárcate en una aventura con Par y su compañero Dadelio para tentar a la suerte y romper la maldición de Azar.",
        img: "/assets/lost-random1.png",
        precio: "20000",
        stock: "2",
        categoria:"aventura",
        reseña:"3,5",
        características: "Un jugador",
    },
    {
        id: 6,
        titulo: "Century: Age of Ashes",
        descripcion: "¡Compite en intensas partidas en línea, desde 3v3 hasta 6v6 jugadores, y descubre la jugabilidad frenética de Century: Age of Ashes! ¡Adéntrate en el estadio por tu cuenta o con amigos y lucha por sobrevivir en varios modos de juego fascinantes!.Century: Age of Ashes ofrece artículos cosméticos para destacar en el estadio. ¡Gana experiencia por jugar y desbloquea skins increíbles para personalizar a tu dragón y a su jinete! No tienes de qué preocuparte, ya que estos artículos son solo cosméticos y no otorgan ninguna ventaja en la batalla.",
        img: "/assets/century1.jpg",
        precio: "17000",
        stock: "3",
        categoria:"accion",
        reseña:"3",
        características: "Un jugador",
    },
    {
        id: 7,
        titulo: "Shadow of the Tomb Raider",
        descripcion: "En Shadow of the Tomb Raider: Definitive Edition, vive el capítulo final de la historia sobre el origen de Lara, en el que se convierte en la saqueadora de tumbas que está destinada a ser. Esta edición incluye el juego básico y siete tumbas de desafío de contenido descargable, así como armas, atuendos y habilidades descargables. Shadow of the Tomb Raider: Definitive Edition es la opción definitiva para vivir el momento que marcó la vida de Lara.",
        img: "/assets/tom-raider1.jpg",
        precio: "23000",
        stock: "3",
        categoria:["accion", "aventura"],
        reseña:"4,7",
        características: "Un jugador",
    },
    {
        id: 8,
        titulo: "Marvel's Spider-Man: Miles Morales",
        descripcion: "El adolescente Miles Morales se adapta a su nuevo barrio al tiempo que sigue los pasos de Peter Parker, su mentor, para convertirse en un nuevo Spider-Man. Cuando la lucha de poderes amenaza con destruir su hogar, Miles debe tomar el relevo de Spider-Man y estar a la altura.                                                                                                             Tras los acontecimientos de Marvel's Spider-Man Remasterizado, el adolescente Miles Morales se adapta a su nuevo barrio al tiempo que sigue los pasos de Peter Parker, su mentor, para convertirse en un nuevo Spider-Man. Pero cuando una feroz lucha de poderes amenaza con destruir su nuevo hogar, el aspirante a héroe se da cuenta de que un gran poder conlleva una gran responsabilidad. Para salvar la Nueva York de Marvel, Miles debe tomar el relevo de Spider-Man y estar a la altura.",
        img: "/assets/hombre-araña1.jpg",
        precio: "20000",
        stock: "7",
        categoria:"accion",
        reseña:"4,8",
        características: "Un jugador",
    },
    {
        id: 9,
        titulo: "Osiris: New Dawn",
        descripcion: "Osiris: New Dawn es un juego de supervivencia espacial ambientado en un futuro cercano e implacable, con un marcado carácter cinematográfico y elementos de terror. Construye una base planetaria, drones controlables y vehículos que se pueden pilotar para explorar un peligroso sistema solar muy lejos de la Tierra.                                                                     Explora y construye de día, y prepárate para sobrevivir a la noche. Atrinchérate o lanza ataques con todo tu armamento. La supervivencia no está garantizada, y la situación te pondrá a prueba hasta el límite.",
        img: "/assets/osiris1.jpg",
        precio: "13000",
        stock: "1",
        categoria:"terror",
        reseña:"3,8",
        características: "Un jugador",
    },
    {
        id: 10,
        titulo: "Spirit of the North",
        descripcion: "Spirit of the North es un juego de aventuras inspirado en los impresionantes y misteriosos paisajes de Islandia. Juega como un zorro rojo ordinario cuya historia se entrelaza con el guardián de la aurora boreal, un zorro espíritu. Mientras viajas por las montañas y bajo cielos teñidos de rojo, descubrirás más sobre tu compañero y la tierra que quedó en ruinas.",
        img: "/assets/spirit1.jpg",
        precio: "10000",
        stock: "7",
        categoria:"aventura",
        reseña:"4,4",
        características: "Un jugador",
    },
    {
        id: 11,
        titulo: "FIFA 23",
        descripcion: "FIFA 23 nos acerca a The World's Game con la tecnología HyperMotion2, la FIFA World Cup™ masculina y femenina disponibles durante la temporada, clubes femeninos, función de juego cruzado y mucho más.",
        img: "/assets/fifa1.webp",
        precio: "20000",
        stock: "7",
        categoria:"deporte",
        reseña:"4",
        características: "Multiple jugadores"
    },
    {
        id: 12,
        titulo: "Kena: Bridge of Spirits",
        descripcion: "Kena, una joven guía espiritual, viaja a un pueblo abandonado en busca del templo de la montaña sagrada.  Allí lucha por desvelar los secretos de esta comunidad olvidada y oculta en un bosque donde vagan espíritus cautivos.Encuentra y reúne a los Rot, son los tímidos e ilusorios espíritus se dispersaron por todo el bosque. Mantienen el equilibrio descomponiendo elementos muertos y putrefactos. ",
        img: "/assets/kena1.webp",
        precio: "23000",
        stock: "5",
        categoria:"fantasia",
        reseña:"4,7",
        características: "Un jugador",
    },
    {
        id: 13,
        titulo: "Final Fantasy VII Remake Integrade",
        descripcion: "Mediante sus reactores succionadores de mako, la savia del planeta, la Compañía de Electricidad y Energía Shinra prácticamente se ha apoderado del mundo. Solo un grupo de idealistas conocido como Avalancha opone resistencia a su dominio. Cloud, un Soldado de élite convertido en mercenario, participa en una operación de Avalancha cuyo fin es la destrucción del reactor de mako n.º 1 de Midgar. La explosión convierte la ciudad en un infierno, y Cloud sufre alucinaciones de su archienemigo, a quien creía muerto. ",
        img: "/assets/final-fantasy1.jpg",
        precio: "25000",
        stock: "4",
        categoria:"fantasia",
        reseña:"4,8",
        características: "Un jugador",
    },
    {
        id: 14,
        titulo: "STAR WARS™ Battlefront™ II",
        descripcion: "Los héroes nacen en el frente ¡Saca tu lado heroico en la aventura definitiva de STAR WARS™ con STAR WARS™ Battlefront™ II: Celebration Edition! Hazte con STAR WARS Battlefront II y todo el contenido de personalización disponible a través de las compras del juego desde el lanzamiento, así como con los artículos inspirados en STAR WARS™: EL ASCENSO DE SKYWALKER",
        img: "/assets/star-wars1.jpg",
        precio: "26000",
        stock: "5",
        categoria: "aventura",
        reseña:"4,5",
        características: "Multiple jugadores",
    },
    {
        id: 15,
        titulo: "Crysis 3 Remastered ",
        descripcion: "En Crysis 3 Remastered, el destino del mundo está en tus manos una vez más. Volviendo al combate como un supersoldado Profeta, y esgrimiendo un potente Arco de depredador de recarga automática que dispara flechas eléctricas, explosivas y de carbón, abate enemigos viejos y nuevos que amenazan la paz para la que has trabajado tanto. Continúa la búsqueda de los alienígenas Alfa Céfalo, pero ahora también tienes que sacar a la luz la verdad sobre la corporación C.E.L.L., que ha convertido Nueva York en una floreciente selva urbana protegida por una nanocúpula gigante. Equipado con tu nanotraje legendario, debes planear, adaptarte y atacar mientras eliges tu camino y combates por siete distritos diferentes. Diezma a tus oponentes en una descarga de fuerza bruta usando la tecnología superior del nanotraje, o usa el sigilo para alcanzar tus objetivos y convertirte en el silencioso salvador de la humanidad. No hay ningún modo equivocado de salvar al mundo.",
        img: "/assets/crysis1.jpg",
        precio: "18000",
        stock: "2",
        categoria: "disparo",
        reseña:"4,6",
        características: "Un jugador",
    },
    {
        id: 16,
        titulo: "Shattered: Tale of the Forgotten King",
        descripcion: "El antiguo mundo ya no existe, ha desaparecido con el rey. Vuelve a forjar la realidad en este oscuro RPG de acción a través de combates basados en habilidades, plataformas innovadoras de mundo abierto y los testimonios de los supervivientes, algunos más dignos de confianza que otros.                                                                                        Ante ti se extiende un continente en ruinas de historias nunca contadas y poderosos enemigos. Para aquellos con el valor suficiente para cruzar sus caminos, el mundo de Hypnos está repleto de secretos, algunos te ayudarán en tu misión y otros te guiarán por la senda de tu existencia. Experimenta combates y fases de plataformas en 2.5D en la compleja narrativa del mundo onírico de acción y aventuras de Shattered - Tale of the Forgotten King.",
        img: "/assets/shattered1.jpg",
        precio: "13000",
        stock: "1",
        categoria:"terror",
        reseña:"3",
        características: "Un jugador",
    },
    {
        id: 17,
        titulo: "WRC 9 FIA World Rally Championship",
        descripcion: "WRC 9, un referente de los simuladores de carreras con unas físicas realistas elogiadas por los mejores pilotos, ofrece aún más contenido.2 nuevos modos de juego diseñados para la comunidad: Un sistema de liga completamente personalizable para que puedas desafiar a tus amigos en varios rallies y un modo copiloto para jugar en cooperativo",
        img: "/assets/wrc91.jpg",
        precio: "10000",
        stock: "5",
        categoria:"carrera",
        reseña:"4,6",
        características: "Multiple jugadores",
    },
    {
        id: 18,
        titulo: "NBA 2K21",
        descripcion: "Conviértete en un auténtico jugador de baloncesto con las nuevas recompensas de zapatillas y prendas de tus marcas favoritas de ropa, accesorios y calzado.Revive el legado del campeonato de baloncesto estadounidense. Salta a la cancha con equipos clásicos, colecciona cartas de Mi EQUIPO de estrellas del pasado y presume de los accesorios de tu Mi JUGADOR.",
        img: "/assets/nba1.png",
        precio: "13000",
        stock: "8",
        categoria:"deporte",
        reseña:"4,2",
        características: "Multiple jugadores",
    },
    {
        id: 19,
        titulo: "iRacing",
        descripcion: "iRacing es una forma divertida y muy competitiva para que los aficionados al automovilismo y a los videojuegos vivan toda la emoción de las carreras de coches.iRacing es el portal mundial por excelencia de las carreras de coches. NASCAR, IndyCar, deportivos IMSA, pistas de tierra ovaladas, off-road, rallycross y más. Solo necesitas un PC, un volante/pedal o un mando y una conexión a internet de alta velocidad.",
        img: "/assets/iracing1.jpg",
        precio: "15000",
        stock: "5",
        categoria: "carrera",
        reseña:"4,3",
        características: "Multiple jugadores",
    },
    {
        id: 20,
        titulo: "Fortnite",
        descripcion: "Explora entornos amplios y destruibles en los que dos partidas nunca serán iguales. Forma equipo con tus amigos y esprinta, trepa y aplasta a tus rivales para conseguir la victoria magistral, ya sea construyendo en Battle Royale de Fortnite o sin hacerlo en Cero construcción de Fortnite. Descubre nuevas formas de jugar a miles de modos de creadores con géneros que van desde las aventuras hasta el rol y la supervivencia, entre otros, o únete a hasta tres amigos para defenderos de las hordas de monstruos en Salvar el mundo ",
        img: "/assets/fortnite1.jpg",
        precio: "20000",
        stock: "2",
        categoria:"accion",
        reseña:"4,3",
        características:"Multiple jugadores",
    },
    {
        id: 21,
        titulo: "Anthem",
        descripcion: "En el gigantesco mundo de Anthem, en constante evolución, estarás a merced de las situaciones, los peligros y los enemigos más impredecibles. Anthem se desarrollará y crecerá con el tiempo: surgirán nuevas historias, desafíos y eventos impactantes. Este mundo es tan bello como letal, y cada nueva expedición en la que te embarques con tu equipo de libranceros te supondrá un reto. Los accesorios, armas y equipo de las alabardas se pueden personalizar al detalle. Conforme subas de nivel y venzas enemigos, acumularás equipo y completarás logros que desbloquearán fantásticas opciones de personalización para convertir tus alabardas en testamentos visuales de tus habilidades y proezas.",
        img: "/assets/anthem1.jpg",
        precio: "23000",
        stock: "6",
        categoria:"aventura",
        reseña:"4,7",
        características: "Multiple jugadores",
    },
    {
        id: 22,
        titulo: "F1 Manager 2022",
        descripcion: "Forma tu equipo.Controla hasta el más mínimo detalle de la organización entre carrera y carrera desde la sede. Supervisa el rendimiento de tus pilotos estrella y del personal, mantén una buena salud financiera y ojea a los mejores trabajadores de las escuderías rivales para darte un empujoncillo extra de cara a las próximas carreras.                                           Compite más cerca de tus rivales que nunca. Asígnales nuevas piezas a tus monoplazas y prepárate para la próxima carrera. Elige el enfoque de ingeniería que te permita sacar ventaja en los próximos circuitos.",
        img: "/assets/f1-manager1.jpg",
        precio: "25000",
        stock: "2",
        categoria:"carrera",
        reseña:"4,6",
        características: "Multiple jugadores",
    },
    {
        id: 23,
        titulo: "Elden Ring",
        descripcion: "En las Tierras Intermedias gobernadas por la reina Márika la Eterna, el Círculo de Elden, origen del Árbol Áureo, fue destruido.Los descendientes de Márika, todos semidioses, reclamaron los fragmentos del Círculo de Elden, conocidos como Grandes Ruinas. Fue entonces cuando la demencial corrupción de su renovada fuerza provocó una guerra: la Devastación. Una guerra que supuso el abandono de la Voluntad Mayor.",
        img: "/assets/elden1.jpg",
        precio: "16800",
        stock: "2",
        categoria:"accion",
        reseña:"3",
        características: "Un jugador",
    },
    {
        id:24,
        titulo: "Gotham Knights",
        descripcion: "Batman ha muerto. Un submundo nuevo de criminales se ha propagado por las calles de Gotham City. Ahora todo depende de Batgirl, Nightwing, Red Hood y Robin. En sus manos queda proteger Gotham, devolver la esperanza a sus ciudadanos, la disciplina a sus policías y el miedo a sus criminales.Resuelve los misterios que conectan los capítulos más oscuros de la historia de la ciudad y derrota a famosos villanos en enfrentamientos épicos.",
        img: "/assets/gothan1.jpg",
        precio: "19600",
        stock: "5",
        categoria:"fantasia",
        reseña:"3,8",
        características: "Un jugador",
    },
]

export default function getItems () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}

export function getItemsCategoria (categoria) {
    return new Promise ((resolve, reject) => {
        // setTimeout(() => {
            let itemFind = data.filter(item => item.categoria === categoria)
            if(itemFind){
                resolve(itemFind);
            }
            else{
                reject(new Error("Juego no encontrado"));
            }
        // }, 1000);
    })
}

export function getSingleItems (idItem) {
    return new Promise ((resolve, reject) => {
        // setTimeout(() => {
            let itemFind = data.find(item => item.id === parseInt(idItem))
            if(itemFind){
                resolve(itemFind);
            }
            else{
                reject(new Error("Juego no encontrado"));
            }
        // }, 1000);
    })
}