import React from 'react'
import './ButtonLink.scss'

interface IProps {
    icon: string
    label: string
    link: string
}

const ButtonLink: React.FC<IProps> = ({ icon, label, link }) =>
    <a href={link} target="_blank" className='button-link'>
        <div className="button-link__div">
            <span className="button-link__span"><i className={icon}></i> {label}</span>
        </div>
    </a>

export default ButtonLink;
