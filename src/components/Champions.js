import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Champions = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
            .then((res) => setData(res.data));

       

    } ,[]);

    console.log(data);
    return (
        <div className="champions">
            <ul className="champions-list">
                
            </ul>
        </div>
    );
};

export default Champions;