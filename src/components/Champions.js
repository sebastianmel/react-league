import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Champions = () => {
    const [data, setData] = useState({});
   

    useEffect(() => {
        axios
            .get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
            .then((res) => setData(res.data.data));


    }, []);

    // console.log(data.data);
    return (
        <div className="champions">
            <div className="champions-list">


                {Object.keys(data).map((key) => {
                    return <div className="champion">{data[key].name} <img src={'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+ data[key].id +"_0.jpg"} ></img> 
                      <u>{data[key].title}</u> <p>{data[key].blurb.replace(/(<([^>]+)>)/gi, "")}</p> <br/>
                      <NavLink exact to={`/champ-infos/${data[key].id}`}><button className="boutton">Plus...</button></NavLink></div>
                      
                })}
               
                
            </div>
        </div>
    );
};

export default Champions;


