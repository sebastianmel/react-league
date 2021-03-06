import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Tft = () => {
    return (
        <div className="tft">
            <Navigation />
            <Logo />
            <h1>Mode de jeu : </h1>
            <img src="./img/back.jpeg" width="100%" height="700px" />
            <div className="rankContain">
                <div className="rankLeft">
                    <br />
                    <p>Teamfight Tactics (abrégé TFT, parfois Combat Tactique (abrégé CT) en français) est un jeu vidéo de type auto battler (en) développé et édité par Riot Games. Il prend place dans l'univers de League of Legends et est basé sur le jeu Dota Auto Chess (en), où le joueur affronte sept adversaires en ligne, qu'il doit combattre en formant une équipe afin d'être le dernier à rester en vie.</p>
                    <br />
                    
                    
                   
                    
                    
                   
                </div>
                <div className="rankRigth">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/liNLLx874g4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   
                    
                </div>
            </div>
            <h1>Le teamfight tactique : </h1>




        </div>
    );
};

export default Tft;