import React from "react";

import "../styles/BadgeNew.css";
import Navbar from "../components/Navbar.js";
import header from "../images/badge-header.svg";
import Badge from "../components/Bagde";
import avatarImg from "../images/link1.jpg";
import BadgeForm from "../components/BadgeForm.js";

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName="Cesar"
                                lastName="Arroyo"
                                twitter="cesar4rroyo"
                                jobTitle="Frontend Engineer"
                                avatarUrl={avatarImg}
                            />
                        </div>
                        <div className="col">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;
