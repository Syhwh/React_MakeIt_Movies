import React from 'react'
import Loading from '../components/Loading';
import Error from '../components/Error';
import MoviesComponent from '../components/MoviesComponent';
import Api from '../Utils/Api';

export default class UpcomingPage extends React.Component {
    render() {
        return (
            <Api endpoint={'/upcoming'}>
                {({ results, loading, error }) => {
                    if (loading) return <Loading />
                    if (error) return <Error />
                    return (
                      <>
                        <h2> Top Rated Movies</h2>
                        {results.length > 0 && <MoviesComponent movies={results} />}
                      </>
                    )
                }}
            </Api>
        )
    }
}