import "./TodayStyle.css";
import { useState } from "react";
import films from "./Films";

// const film = [

//     {
//         name: "Sawxxxxxxxxhsghsdfhsdfhrdfgr",
//         genre: "horror",
//         imgsrc: "src/assets/Saw.jpg"
//     },
//     {
//         name: "Ça",
//         genre: "horror",
//         imgsrc: "src/assets/Sa.jpg"
//     },
//     {
//         name: "Barbie",
//         genre: "horror",
//         imgsrc: "src/assets/Barbie.jpg"
//     }
// ]

function MovieOfDay() {

    const [Filmei, setFilmei] = useState(0);

    const handleClickP = () => {
        setFilmei(Filmei - 1)
    }
    const handleClickN = () => {
        setFilmei(Filmei + 1)
    }
    const film = [
        {
            nom: "Ça",
            categorie: "Horreur",
            note: "7.4/10",
            resume: "Un groupe d'enfants affronte leurs peurs et un sinistre clown, Pennywise, dans la petite ville de Derry, Maine.",
            image: "src/assets/It.jpg",
            avis: "Ça est un film d'horreur terrifiant. L'interprétation de Bill Skarsgård en Pennywise est cauchemardesque, et l'atmosphère est oppressante."
        },
        {
            nom: "The Shining",
            categorie: "Horreur",
            note: "8.4/10",
            resume: "Une famille se retrouve isolée dans un hôtel en montagne pendant l'hiver, mais des forces surnaturelles commencent à les tourmenter.",
            image: "src/assets/The Shining.jpg",
            avis: "The Shining est un classique de l'horreur. La tension monte lentement, et Jack Nicholson livre une performance mémorable en devenant de plus en plus fou."
        },
    ]
    const filmN = film[Filmei]

    return (
        <div className="Tblock"><div className="Texteblockl" >Bienvenu à toi fan de film! En cette période de Hallowen quoi de mieux que de ce mettre dans l'ambiance avec des films
            d'HORREUR!! Voici notre recommandation du moment!</div>
            <div ><figure className="imgTblock"><img className="imgT" src={filmN.image}></img>
                <div className="BlockB">
                    {Filmei > 0 ? <button className="ButonT" onClick={handleClickP}>précédent</button> : null}
                    <h1 className="MovieN">{filmN.nom}</h1>
                    {Filmei < film.length - 1 ? <button className="ButonT" onClick={handleClickN}>next</button> : null}
                </div></figure></div>
        </div>

    )

};
export default MovieOfDay