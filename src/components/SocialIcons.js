import React, { Component } from "react";

class SocialIcons extends Component {
    render() {
        return (
            <ul className="social-list">
                <li>
                    <a href="https://www.instagram.com/RopeAndLaddermusic/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className='fab fa-instagram' />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/Rope_and_Ladder" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className='fab fa-twitter' />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/RopeAndLadder" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className='fab fa-facebook' />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UChM5AgIbOSZssaG8N9BJ00w" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <i className="fab fa-youtube-square" />
                    </a>
                </li>
            </ul>
        );
    }
}

export default SocialIcons;
