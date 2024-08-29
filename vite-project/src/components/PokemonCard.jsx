// TODO: This component should render a single pokemon's stats and image.
import React from "react"

const PokemonCard = ({ id, name, image, hp }) => {
    return (
        <div className="ui card">
        <div>
            <div className="image">
                <img alt={name} src={image} />
            </div>
            <div className="content">
                <div className="header">{name}</div>
            </div>
            <div className="extra content">
                <span>
                    <i className="icon heartbeat red" />
                    {hp} HP
                </span>
            </div>
        </div>
    </div>
    )
}

export default PokemonCard