import './App.css';
import Valute from "./components/Valute/Valute";
import Menu from "./Layout/Menu/Menu";
import {Route, Routes} from "react-router-dom";
import Converter from "./components/Converter/Converter";
import React from "react";



const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Menu />}>
                    <Route path="/valute" element={<Valute />} />
                    <Route path="/converter" element={<Converter/>} />
                </Route>

            </Routes>
        </>
    )
}
export default App;



// you are given an array string. A string s is formed by the concatenation of a subsequence of the array of strings arr. You are given an integer k. Return the maximum possible length of a s such that the frequency of each letter of the alphabet is less than or equal to k.

// variant 1
//
// function longestString(arr, k) {
//     let result = 0;
//     let n = arr.length;
//     let count = new Array(26).fill(0);
//     let unique = 0;
//     let max = 0;
//
//     for (let i = 0; i < n; i++) {
//         let len = arr[i].length;
//         for (let j = 0; j < len; j++) {
//             if (count[arr[i][j].charCodeAt() - 97] == 0) {
//                 unique++;
//             }
//             count[arr[i][j].charCodeAt() - 97]++;
//         }
//         if (unique <= k) {
//             max = Math.max(max, len);
//         }
//         for (let j = 0; j < len; j++) {
//             count[arr[i][j].charCodeAt() - 97] = 0;
//         }
//         unique = 0;
//     }
//     return max;
// }
