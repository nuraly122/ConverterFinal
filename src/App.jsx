import Valute from "./Pages/Valute/Valute";
import Menu from "./Layout/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Converter from "./Pages/Converter/Converter";
import React from "react";
// import {inject, observer} from "mobx-react";

// inject('mainStore')
// observer()

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Menu/>}>
                    <Route path="/valute" element={<Valute/>}/>
                    <Route path="/converter" element={<Converter/>}/>
                </Route>

            </Routes>
        </>
    )
}
export default App;
