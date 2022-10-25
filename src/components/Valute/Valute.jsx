import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../Api";
import "./Valute.css"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Valute = () => {

    const [valute, setValute] = useState([]);

    useEffect( () => {
        fetch(BASE_URL, {
        })
            .then(res => res.json())
            .then((json) => {
                setValute(Object.values(json.Valute))
            })
    }, [])
    console.log(valute)

    function format(number) {
        return number.toFixed(2);
    }

    return (
        <div>
            {
                valute && valute.map(item => (
                    <div className='valute'>
                        <h2 className='vtitle'>{item.Name}</h2>
                        <div className='card'>
                            <p className='nominal'>{item.Nominal} <span style={{fontSize: 14}}>RUB</span></p>
                            <button className='button'><ArrowForwardIcon/></button>
                            <p className='value'>{format(item.Value)} <span>{item.CharCode}</span></p>
                            <p style={{display: "flex", alignItems: "center"}} className='previous'>{item.Previous < item.Value ? <span style={{color:"red"}}><ArrowDownwardIcon/></span> : <span style={{color:"green"}}>< ArrowUpwardIcon/></span>}  <span style={{color: item.Previous < item.Value ? 'red' : 'green'}}>{format(item.Previous)}</span>  <span>{item.CharCode}</span></p>
                        </div>

                    </div>
                ))
            }
        </div>
    );
};

export default Valute;