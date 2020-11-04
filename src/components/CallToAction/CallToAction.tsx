import React from 'react'
import { Element } from 'react-scroll'

import './CallToAction.scss'
import ButtonLink from '../ButtonLink/ButtonLink'

const CallToAction = () => (
  <Element name="listen" className="page-section">
    <div className="call-to-action-container">
      <div className="iframe-container">
        <iframe
          title="play rope and ladder music"
          src="https://open.spotify.com/embed/album/3V6cYBEdgKndJBXxuxqU5o"
          width="400"
          height="480"
          frameBorder="0"
          allowTransparency
          allow="encrypted-media"
        />
        <div className="link-container">
          <ButtonLink
            suppressNewPage
            filled
            link="/#store"
            label="official store"
            icon="fa fa-shopping-cart"
          />
          <ButtonLink
            filled
            link="https://www.smarturl.it/rope-and-ladder/spotify"
            label="spotify"
            icon="fab fa-spotify"
          />
          <ButtonLink
            filled
            link="https://www.smarturl.it/rope-and-ladder/youtubemusic"
            label="youtube"
            icon="fab fa-youtube-square"
          />
          <ButtonLink
            filled
            link="https://www.smarturl.it/rope-and-ladder/bandcampbuy"
            label="bandcamp"
            icon="fab fa-bandcamp"
          />
          <ButtonLink
            filled
            link="https://www.smarturl.it/rope-and-ladder/applemusic"
            label="apple music"
            icon="fab fa-apple"
          />
          <ButtonLink
            filled
            link="https://www.smarturl.it/rope-and-ladder/itunes"
            label="itunes"
            icon="fab fa-itunes-note"
          />
          <ButtonLink
            filled
            link="https://www.smarturl.it/rope-and-ladder/az"
            label="amazon"
            icon="fab fa-amazon"
          />
          <ButtonLink
            filled
            link="https://www.smarturl.it/rope-and-ladder/googleplay"
            label="google play"
            icon="fab fa-google-play"
          />
        </div>
      </div>
    </div>
  </Element>
)

export default CallToAction
