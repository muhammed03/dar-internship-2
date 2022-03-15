import React from 'react';
import { Actor } from '../../types';
import ActorItem from '../actorItem/ActorItem';

type Props = {
    actors: Actor[];
};

const MoviesList: React.FC<Props> = ({ actors }) => {
    return (
        <div className="movies-list">
            {actors.map((actor) => (
                <ActorItem actor={actor} />
            ))}
        </div>
    );
};

export default MoviesList;
