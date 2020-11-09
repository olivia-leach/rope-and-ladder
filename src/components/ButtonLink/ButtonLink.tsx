import React from 'react'
import './ButtonLink.scss'

interface IButtonLinkProps {
  icon: string
  label: string
  link: string
  filled?: boolean
  suppressNewPage?: boolean
}

const ButtonLink: React.FC<IButtonLinkProps> = ({
  icon,
  label,
  link,
  filled,
  suppressNewPage,
}) => (
  <a
    data-testid='buttonLink'
    href={link}
    target={suppressNewPage ? undefined : '_blank'}
    className={`button-link ${filled ? 'button-link--filled' : ''}`}
  >
    <div className="button-link__div">
      <span className="button-link__span">
        <i className={icon}></i> {label}
      </span>
    </div>
  </a>
)

export default ButtonLink
