import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Root from "./root.component";


function App(props) {
    return (
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    );
}

export default App;