import React, { Component } from "react";

class SocialIcons extends Component {
    render() {
        return (
            <ul className="social-list">
                <li className="facebook">
                    <a href="https://www.facebook.com/RopeAndLadder" target="_blank" className="social-icon">
                        <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li className="instagram">
                    <a href="https://www.instagram.com/RopeAndLaddermusic/" target="_blank" className="social-icon">
                        <i className="fab fa-instagram" />
                    </a>
                </li>
                <li className="twitter">
                    <a href="https://www.twitter.com/Rope_and_Ladder" target="_blank" className="social-icon">
                        <i className="fab fa-twitter" />
                    </a>
                </li>
                {/*<li className="youtube">
                    <a href="https://www.youtube.com/RopeAndLadder" target="_blank" className="social-icon">
                        <i className="fab fa-youtube" />
                    </a>
                </li>*/}
            </ul>
        );
    }
}

export default SocialIcons;
