/*
 * Icons Component
 *
 * Help (with example) from: https://github.com/parcel-bundler/parcel/issues/2246
 * SVG `symbol` a Good Choice for Icons by Chris Coyier: https://css-tricks.com/svg-symbol-good-choice-icons
 * Creating an SVG Icon System with React by Sarah Drasner: https://css-tricks.com/creating-svg-icon-system-react
 */

// @todo
// Add default styling using scss!!
// Add most used material design icons to sprite

import React from "react"
import PropTypes from "prop-types"
import IconsSprite from "../../08_icons/icon-sprite.svg"

const Icons = props => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className={`icon icon-${props.name}`}
            >
                <use xlinkHref={`${IconsSprite}#${props.symbol}`} />
            </svg>
        </>
    )
}

Icons.defaultProps = {
    symbol: "icon",
}

Icons.propTypes = {
    symbol: PropTypes.string.isRequired,
}

export default Icons