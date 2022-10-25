import React from 'react';
import {useEffect, useState} from "react";
import {BASE_URL} from "../../Api";
import CurrencyRow from "../CurrencyRow";
import './Converter.css'

const Converter = () => {


    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');
    const [valute, setValute] = useState([]);




    console.log(valute);
    useEffect(() => {
        fetch(BASE_URL, {
        })
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                setValute((json.Valute))
            })


    }, [])

    useEffect(() => {
        if (!!valute) {
            function init() {
                handleAmount1Change(1);
            }
            init();
        }
    }, [valute]);



    function format(number) {
        return number.toFixed(2);
    }

    function handleAmount1Change(amount1) {
        console.log(typeof amount1)
        setAmount2(format(amount1 * (valute[currency1]?.Value / valute[currency1]?.Nominal) / (valute[currency2]?.Value / valute[currency2]?.Nominal)));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        console.log(typeof currency1)
        console.log(valute[currency1])
        setAmount2(format(amount1 * (valute[currency1]?.Value / valute[currency1]?.Nominal) / (valute[currency2]?.Value / valute[currency2]?.Nominal)));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * (valute[currency2]?.Value / valute[currency2]?.Nominal) / (valute[currency1]?.Value / valute[currency1]?.Nominal)));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * (valute[currency2]?.Value / valute[currency2]?.Nominal) / (valute[currency1]?.Value / valute[currency1]?.Nominal)));
        setCurrency2(currency2);
    }


    return (
        <div className='converter'>
            <CurrencyRow
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(valute)}
                amount={amount1}
                currency={currency1} />
            <CurrencyRow
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(valute)}
                amount={amount2}
                currency={currency2} />
        </div>
    );
};

export default Converter;