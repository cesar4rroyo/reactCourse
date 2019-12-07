import React from "react";
// import header from "../images/badge-header.svg";
// import stars from "../images/stars.svg";
import "../styles/home.css";
import confLogo from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";
import astronautsImage from "../images/astronauts.svg";

class home extends React.Component {
    render() {
        return (
            <div className="Home">
                <div className="container">
                    <div className="row">
                        <div className="Home__col col-12 col-md-4">
                            <img
                                className="img-fluid mb-2"
                                src={confLogo}
                                alt="Platzi Conf Logo"
                            />
                            <h1>Crea tu propio Badge</h1>
                            <h3>The easiest way to manage your conference</h3>
                            <Link className="btn btn-primary" to="/badges">
                                Empezar
                            </Link>
                        </div>
                        <div className="Home__col d-nome d-md-block col-md-8">
                            <img
                                src={astronautsImage}
                                alt="Astronautas Img"
                                className="img-fluid p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;
