import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Tft = () => {
    return (
        <div className="tft">
            <Navigation />
            <Logo />
            <h1>Le teamfight tactique : </h1>
            <img src="./img/Ranked.jpg" width="100%" height="700px" />
            <div className="rankContain">
                <div className="rankLeft">
                    <br />
                    <p>Même les joueurs professionnels de la Ligue doivent commencer quelque part, et si beaucoup jouent depuis les premières saisons, de nouveaux joueurs font constamment irruption sur la scène. Examinons de plus près les rank LoL.</p>
                    <br />
                    <p>Mais ces joueurs ne trouvent pas leur chemin vers les équipes professionnelles après avoir joué à l’université ou dans les mineures. Chaque pro de League of Legends a parcouru les échelles de classement jusqu’à Maître, Grand Maître, et Challenger, les niveaux de classement finaux très compétitifs.</p>
                    <br />
                    <p>Cependant, cela peut être une perspective décourageante pour les nouveaux venus dans LoL compétitif. Beaucoup ont des questions persistantes, comme : Combien y a-t-il de rangs, comment s’appellent-ils, dans lequel vais-je commencer, et combien de personnes se retrouvent dans le premier rang ? Pour simplifier un peu ta transition dans le monde de LoL compétitif, nous avons rassemblé quelques réponses aux questions les plus fréquentes sur le système de classement de League of Legends.</p>
                    <br />
                </div>
                <div className="rankRigth">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/m2z9buDYVa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <b>Evolution de l'ornement :</b> <iframe width="560" height="315" src="https://www.youtube.com/embed/8O9MQ2fI6Os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <h1>Le teamfight tactique : </h1>




        </div>
    );
};

export default Tft;