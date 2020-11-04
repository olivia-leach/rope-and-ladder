import React, { useState, useEffect, useCallback } from 'react'
import Loader from '../Loader/Loader';
import { useHistory } from 'react-router'

import './EarlyAccess.scss'

interface IProps {
  location: Location
  history: History
}

const stopProp = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()

const EarlyAccess = (props: IProps) => {
    const [isValid, setIsValid] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const { push } = useHistory()
    
    useEffect(() => {
        // lock body scroll
        document.body.classList.add('isFixed')

        // check for token
        const urlHasCode = props.location.search.includes('?code=')
        const codeIs10 = props.location.search.length === 16
        if (!urlHasCode || !codeIs10) {
            setIsValid(false)
            setIsLoading(false)
        }

        return function cleanup() {
            document.body.classList.remove('isFixed')
        }
    }, [props.location.search])

    const goHome = useCallback(() => {
     push('/')
    }, [push])

    const setLoadingFalse = useCallback(() => {
        setIsLoading(false)
    }, [])

    const setLoadingTrue = useCallback(() => {
        setIsLoading(true)
    }, [])

    return (
        <div className='EarlyAccess' onClick={goHome}>
            <div className="EarlyAccess__Modal" onClick={stopProp}>
                <button className="EarlyAccess__Modal__Button" onClick={goHome}>
                    <span aria-hidden='true'>x</span>
                    <span className='visuallyhidden'>Close</span>
                </button>
                <div className={`EarlyAccess__Modal__Body${isLoading ? '--isLoading' : ''}`}>
                    {isLoading && <div className='EarlyAccess__LoaderContainer'><Loader /></div>}
                    {!isLoading && isValid && (
                        <div>
                            <h2>Thanks for signing up.</h2>
                            <p>Enjoy your early access.</p>
                            <p>So far, we've released two singles, but — This project was never meant to be listened to one single at a time. It's a concept album: The songs tell a cohesive story in chronological order.</p>
                            <p>The first four songs of the record make up the prologue - A little bit of storytelling that happens a few years before tracks 5-13.</p>
                            <p>We'd love for you to set aside some time and approach it as you would film or theatre. Let your imagination fill out the scenes, and start getting to know the characters.</p>
                            <p>Let us know what you think! Shoot us a message - we're always excited to chat.</p>
                            <h4>Love,<br/>Rope and Ladder</h4>
                        </div>
                    )}
                    {!isLoading && !isValid && (
                        <div>
                            <h2>Uh oh, you forgot something.</h2>
                            <p>Sign up on the home page to get your personal early access link.</p>
                            <h4>Love,<br/>Rope and Ladder</h4>
                        </div>
                    )}
                    {isValid && (
                        <iframe
                            style={{ border: 0, width: '400px', height: '472px' }}
                            src="https://bandcamp.com/EmbeddedPlayer/album=2731032401/size=large/bgcol=ffffff/linkcol=e99708/artwork=none/transparent=true"
                            seamless
                            title='bandcamp'
                            onLoad={setLoadingFalse}
                            onError={setLoadingTrue}
                        >
                        <a href="http://ropeandladder.bandcamp.com/album/rope-and-ladder-2">Rope and Ladder by Rope and Ladder</a>
                    </iframe>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EarlyAccess