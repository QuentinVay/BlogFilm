import "./TodayStyle.css";
import { useState } from "react";
import films from "./Films";

function MovieOfDay() {

    const [Filmei, setFilmei] = useState(0);

    const handleClickP = () => {
        setFilmei(Filmei - 1)
    }
    const handleClickN = () => {
        setFilmei(Filmei + 1)
    }

    const horroFilm = (cat) => {

        return films.filter((el) => {
            return el.categorie === cat
        })
    }

    const filmN = horroFilm("Animation")[Filmei]

    const Hotext =
        <div>Bienvenue a toi, passionné de cinéma!  En cette période d'Halloween, quoi de mieux que de se mettre dans l'ambiance avec des films?
            d'HORREUR! Voici notre recommandation du moment!</div>;
    const Notext =
        < div > Noyeux Joël !  (Ce référé à Quentin, notre CEO, pour toute plainte envers notre humour.Merci). Quoi de mieux qu'un bon film d'animation, au coin du feu avec un chocolat chaud et de la neige tombant par la fenêtre!
            Nous vous présentons notre recommandation pour Noël!</div >;

    const musi = <audio controls autoPlay ><source src="src\assets\All-is-fine.mp3" type="audio/mp3"></source></audio>
    // Pour noël changer la className du 1er div par TNoblock et ajouter {musi} à coter du texte.
    //  pour horreur metre THoblock.
    return (
        <div className="TNoblock"><div className="Texteblockl" >{Notext}{musi}</div>
            <div ><figure className="imgTblock"><img className="imgT" src={filmN.image}></img>
                <div className="BlockB">
                    {Filmei > 0 ? <button className="ButonT" onClick={handleClickP}>précédent</button> : null}
                    <h1 className="MovieN">{filmN.nom}</h1>
                    {Filmei < horroFilm("Animation").length - 1 ? <button className="ButonT" onClick={handleClickN}>next</button> : null}
                </div></figure></div>
        </div>
    )

};
export default MovieOfDay
