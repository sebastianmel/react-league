import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <h1>A propos du jeu : </h1>
            <img src="./img/Environmentart.jpg" width="100%" height="600px"/>
            <br/>
            <div className="aboutContain">
                <div className="aboutLeft">
                <p>Cher invocateur, la partie commence. A partir de maintenant, la bataille fait rage dans les champs de justices. Hâtez-vous
                     d’acheter vos 1ers items dans le magasin et filez sur vos lignes respectives, sans oublier d’aider un peu votre jungler 
                     s’il le demande. Votre but est simple maintenant : amasser des gold pour vous équiper au mieux 
                    et le plus vite possible, mais également gagner vite de l’expérience pour augmenter de niveau, car dans League of legends, vous
                     commencez  niveau 1, le max étant le niveau 18, à vous d’augmenter de niveau plus vite que vos adversaires en tuant plus de sbires… ou plus d’ennemis.</p>
            <br/>
            <p>Pour ce faire, les charmants petits sbires ou creep (les monstres arrivant par vagues régulières) sont là pour ça.  Éliminez-les sans 
                ménagement, chaque sbire tué vous rapproche de votre item. Attention tout de même, il ne suffit pas de l’auto-attaque, il faut donner le
                 dernier coup pour récupérer l’argent (le last hit, 
                une mécanique simple mais essentielle à prendre en mains le plus tôt possible).</p>
            <br/>
            <p>Dans la jungle, pas de vagues de sbires, mais des camps de monstres. Chaque camps offrira des golds, de l’expérience et certain vous 
                octroieront même des buffs (des bonus). Mais la jungle est spéciale, tous les détails seront expliqué précisément dans le topic des
                 postes. Le jungler n’existe vraiment que sur la carte faille de l’invocateur en 5v5. Si vous jouez sur les autres maps ne vous souciez pas trop de lui.</p>
            <br/>
            <p>Lorsque vous commencerez à mener la danse sur votre ligne, vous pourrez commencer à prendre les objectifs des lignes : les tourelles.
                 Il y en a trois  sur chaque lignes. Derrière la troisième se trouve l'inhibiteur, puis encore deux tourelles qui gardent farouchement
                  votre ultime but : le Nexus adverse. Détruisez le pour gagner votre partie. Tout est expliqué plus bas dans les sous-partie.</p>
                </div>
                <div className="aboutRight">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SwlBTktgMM4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
           
        </div>
    );
};

export default About;