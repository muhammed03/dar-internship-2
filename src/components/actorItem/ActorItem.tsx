import React, { useState } from 'react';
import {Actor} from '../../types';

type Props = {
    actor: Actor;
};

const MovieItem: React.FC<Props> = ({ actor }) => {
    const [like, setState] = useState(false)

    const actorRatingClick = () => {
        if (like) {
            setState(false);
        } else {
            setState(true)
        }
    };

    return (
        <div className="movie-item" style={{ marginBottom: '1rem' }}>
            <img src={actor.image} alt={actor.name} style={{ width: '200px' }} />
            <h4>{actor.name} {actor.lastName}</h4>
            <button onClick={actorRatingClick}>
                {like ? 'Like' : 'Dislike'}
            </button>
        </div>
    );
};

export default MovieItem;
