import React from 'react';
import { Card } from 'react-bootstrap';

export default ({ id, title, overview, backdrop_path }) => {
    return (
        <Card style={{ width: '25rem' }} key={id} className="bg-dark text-white" >
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {overview}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
