// TODO: This component should render a single pokemon's stats and image.
import React from 'react';

const PokemonCard = ({ name, frontImage, hp }) => {
    return (
        <div className="ui card">
            <div className="image">
                <img
                    alt={name}
                    src={frontImage}
                />
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
    );
}

export default PokemonCard;