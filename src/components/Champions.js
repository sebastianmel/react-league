import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
            <ul className="champions-list">


                {Object.keys(data).map((key) => {
                    return <div>{data[key].name} <img src={'../../assets/'+ data[key].image.full}></img> 
                      <p>{data[key].title}</p> <p>{data[key].blurb}</p> <br/></div>
                })}
               
                

            </ul>
        </div>
    );
};

export default Champions;


