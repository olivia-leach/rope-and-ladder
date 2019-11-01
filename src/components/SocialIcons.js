import React, { Component } from "react";
import Instagram from '../instagram.png'
import Twitter from '../twitter.png'
import Facebook from '../fb.png'

class SocialIcons extends Component {
    render() {
        return (
            <ul className="social-list">
                <li className="facebook">
                    <a href="https://www.instagram.com/RopeAndLaddermusic/" target="_blank" className="social-icon">
                        <img src={Instagram} />
                    </a>
                </li>
                <li className="instagram">
                    <a href="https://www.twitter.com/Rope_and_Ladder" target="_blank" className="social-icon">
                        <img src={Twitter} />
                    </a>
                </li>
                <li className="twitter">
                    <a href="https://www.facebook.com/RopeAndLadder" target="_blank" className="social-icon">
                        <img src={Facebook} />
                    </a>
                </li>
                <li className="youtube">
                    <a href="https://www.youtube.com/channel/UChM5AgIbOSZssaG8N9BJ00w" target="_blank" className="social-icon">
                        <i className="fab fa-youtube-square" />
                    </a>
                </li>
            </ul>
        );
    }
}

export default SocialIcons;
