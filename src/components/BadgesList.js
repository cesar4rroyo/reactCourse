import React from "react";
import { Link } from "react-router-dom";
import "../styles/badgesList.css";
import twitterImg from "../images/twitter.svg";

class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="BadgesListItem">
                <img
                    className="BadgesListItem__avatar"
                    src={this.props.badge.avatarUrl}
                    alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
                />

                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br />
                    <img
                        className="twitter__logo"
                        src={twitterImg}
                        alt="twitterLogo"
                    />
                    @{this.props.badge.twitter}
                    <br />
                    {this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}

class BadgesList extends React.Component {
    render() {
        if (this.props.badges.length == 0) {
            return (
                <div>
                    <h3>No Badge were found</h3>
                    <Link className="btn btn-primary">Create New</Link>
                </div>
            );
        }
        return (
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <BadgesListItem badge={badge} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;
