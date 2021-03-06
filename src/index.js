// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import BadgeNew from "./pages/BadgeNew";
// const jsx = (
//     <div>
//         <h1> Hola, soy Cesar </h1>
//         <p> Soy Ingeniero FrontEnd </p>
//     </div>
// );

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew />, container);
// <Badge
//     firstName="Cesar"
//     lastName="Arroyo"
//     jobTitle="Frontend Engineer"
//     twitter="cesar4rroyo"
//     avatarUrl="https://es.gravatar.com/cesar4rroyo"
// />,
// container
