/*
 * Icon Component
 *
 * Help (with example) from: https://github.com/parcel-bundler/parcel/issues/2246
 * SVG `symbol` a Good Choice for Icons by Chris Coyier: https://css-tricks.com/svg-symbol-good-choice-icons
 * Creating an SVG Icon System with React by Sarah Drasner: https://css-tricks.com/creating-svg-icon-system-react
 * Accessible SVGs by Heather Migliorisi https://css-tricks.com/accessible-svgs/
 */

import React from "react"
import PropTypes from "prop-types"
import IconsSprite from "../../08_icons/icon-sprite.svg"

const Icon = props => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 24 24"
                focusable="false"
                className={`icon ${props.modifier}`}
            >
                <title>{props.title}</title>
                <use xlinkHref={`${IconsSprite}#${props.name}`} />
            </svg>
        </>
    )
}

Icon.defaultProps = {
    name: "open-in-new",
    title: "Link will open in new tab",
    modifier: "",
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    modifier: PropTypes.string,
}

export default Icon