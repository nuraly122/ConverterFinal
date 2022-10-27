import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import {Provider} from "mobx-react";
// import mainStore from "./Store/mainStore";
// import converterStore from "./Store/converterStore";
// import valuteStore from "./Store/valuteStore";
//
// const stores = {
//     // mainStore,
//     // converterStore,
//     // valuteStore
// }

ReactDOM.render(
    <BrowserRouter>
        {/*<Provider store={...stores}>*/}
            <App />
        {/*</Provider>*/}
    </BrowserRouter>,
    document.getElementById('root')
);
