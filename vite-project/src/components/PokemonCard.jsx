// TODO: This component should render a single pokemon's stats and image.
import React, { useState } from 'react';

const PokemonCard = ({ id, name, frontImage, backImage, hp }) => {
    const [showFront, setShowFront] = useState(true);

    const toggleImage = () => {
        setShowFront(prevShowFront => !prevShowFront);
    };

    return (
        <div className="ui card" onClick={toggleImage}>
            <div className="image">
                <img
                    alt={name}
                    src={showFront ? frontImage : backImage}
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