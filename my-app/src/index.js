import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./component/Header/Header";
import 'normalize.css';
import Banner from "./component/Banner/Banner";
import Object from "./component/Object/Object";





ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Banner/>
        <Object/>
    </React.StrictMode>,
    document.getElementById('root')
);

