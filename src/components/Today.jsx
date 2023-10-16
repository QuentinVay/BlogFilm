import "./TodayStyle.css";
import { useState } from "react";

const film = [

    {
        name: "Sawxxxxxxxxhsghsdfhsdfhrdfgr",
        genre: "horror",
        imgsrc: "src/assets/Saw.jpg"
    },
    {
        name: "Ça",
        genre: "horror",
        imgsrc: "src/assets/Sa.jpg"
    },
    {
        name: "Barbie",
        genre: "horror",
        imgsrc: "src/assets/Barbie.jpg"
    }
]

function MovieOfDay() {

    const [Filmei, setFilmei] = useState(0);

    const handleClickP = () => {
        setFilmei(Filmei - 1)
    }
    const handleClickN = () => {
        setFilmei(Filmei + 1)
    }
    const filmN = film[Filmei]
    return (
        <div className="Tblock"><div className="Texteblockl" >Bienvenu à toi fan de film! En cette période de Hallowen quoi de mieux que de ce mettre dans l'ambiance avec des films
            d'HORREUR!! Voici notre recommandation du moment!</div>
            <div ><figure className="imgTblock"><img className="imgT" src={filmN.imgsrc}></img>
                <div className="BlockB">
                    {Filmei > 0 ? <button className="ButonT" onClick={handleClickP}>précédent</button> : null}
                    <h1 className="MovieN">{filmN.name}</h1>
                    {Filmei < film.length - 1 ? <button className="ButonT" onClick={handleClickN}>next</button> : null}
                </div></figure></div>
        </div>

    )

};
export default MovieOfDay