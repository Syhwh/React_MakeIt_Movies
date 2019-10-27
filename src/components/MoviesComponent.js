import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import MovieCardComponent from './MovieCardComponent';


function MoviesComponent({ movies }) {
  return (
    <Fragment>
      <Container>
        <Row>
          {movies.map(({ id, title, overview, poster_path, release_date, backdrop_path }) =>
            <MovieCardComponent
              key={id} title={title} overview={overview} release_date={release_date} backdrop_path={backdrop_path} />
          )}
        </Row>
      </Container>
    </Fragment>
  );
}
export default MoviesComponent