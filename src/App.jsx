import Valute from "./Pages/Valute/Valute";
import Menu from "./Layout/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Converter from "./Pages/Converter/Converter";
import React from "react";
import ConverterAdditional from "./Pages/ConverterAdditional/Converter.Additional";


const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Menu/>}>
                    <Route path="/valute" element={<Valute/>}/>
                    <Route path="/converter" element={<Converter/>}/>
                    <Route path="/foodConverter" element={<ConverterAdditional/>}/>
                </Route>

            </Routes>
        </>
    )
}
export default App;
