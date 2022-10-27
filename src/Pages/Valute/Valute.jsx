import React, {useEffect, useState} from 'react';
import {BASE_URL} from "../../Api";
import "./Valute.css"
import axios from "axios";
import {Box} from "@mui/material";
import ValuteCard from  "../../Components/ValuteCard/ValuteCard";
import {observer} from "mobx-react";
import store from "./../../Store/store";

const Valute = () => {


    useEffect(() => {
        store.getRates();
    }, []);


    return (
        <Box className='vbox'>
            {
                store.valute && store.valute.map(item => (
                    <ValuteCard item={item}/>
                ))
            }
        </Box>
    );
};

export default observer(Valute);