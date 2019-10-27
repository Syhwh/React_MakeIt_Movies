import React from 'react';

//import components
import Loading from '../components/Loading';
import Error from '../components/Error';
import MoviesComponent from '../components/MoviesComponent';
import Api from '../Utils/Api';



class PopularMoviesPage extends React.Component {
  render() {
    return (  
        <Api endpoint={'/popular'} >
          {({ results, loading, error }) => {
            if (loading) return <Loading />
            if (error) return <Error />
            return (
              <>
                <h2> Popular Movies</h2>
                {results.length > 0 && <MoviesComponent movies={results} />}
              </>
            )
          }}
        </Api>
    )
  }

}

export default PopularMoviesPage;
