import React, { useState, useEffect, useCallback } from 'react'
import Loader from '../Loader/Loader';

import './EarlyAccess.scss'

function EarlyAccess(props) {
    const [isValid, setIsValid] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        // lock body scroll
        document.body.classList.add('isFixed')

        // check for token
        const urlHasCode = props.location.search.includes('?code=')
        if (!urlHasCode) {
            setIsValid(false)
            setIsLoading(false)
        }

        return function cleanup() {
            document.body.classList.remove('isFixed')
        }
    })

    const goHome = useCallback(() => {
        props.history.push('/')
    }, [])

    const stopProp = useCallback((e) => {
        e.stopPropagation()
    }, [])

    const setLoadingFalse = useCallback(() => {
        setIsLoading(false)
    })

    const setLoadingTrue = useCallback(() => {
        setIsLoading(true)
    })

    return (
        <div className='EarlyAccess' onClick={goHome}>
            <div className="EarlyAccess__Modal" onClick={stopProp}>
                <button className="EarlyAccess__Modal__Button" onClick={goHome}>
                    <span aria='hidden'>x</span>
                    <span className='visuallyhidden'>Close</span>
                </button>
                <div className={`EarlyAccess__Modal__Body${isLoading ? '--isLoading' : ''}`}>
                    {isLoading && <div className='EarlyAccess__LoaderContainer'><Loader /></div>}
                    {!isLoading && isValid && (
                        <div>
                            <h2>Thanks for signing up.</h2>
                            <p>Enjoy your early access.</p>
                            <p>Cornish rex ocelot tomcat cougar. Tom donskoy. Jaguar puma siamese but bombay. Cougar devonshire rex lion. Singapura tom lion. Abyssinian . Ragdoll havana brown but siamese and ragdoll. Persian leopard kitten. Ragdoll tabby sphynx for ocicat malkin american bobtail american shorthair. Maine coon bombay, for thai tiger so grimalkin havana brown so balinese . Ocicat persian kitten and sphynx. Ragdoll leopard.</p>
                            <p>Leopard. Cougar malkin yet mouser but singapura. Tomcat scottish fold siberian. Norwegian forest. Malkin savannah sphynx cornish rex persian or ocicat turkish angora. Cornish rex egyptian mau or siamese and ocelot. Burmese maine coon so russian blue bombay kitty so panther yet devonshire rex.</p>
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
                            // style={{ border: 0, width: '350px', height: '786px' }}
                            style={{ border: 0, width: '400px', height: '472px' }}
                            src="https://bandcamp.com/EmbeddedPlayer/album=2731032401/size=large/bgcol=ffffff/linkcol=e99708/artwork=small/transparent=true/"
                            // src="https://bandcamp.com/EmbeddedPlayer/album=2731032401/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=true/tracks=2496975933,1440423378,1973265551,91971970,437267700"
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