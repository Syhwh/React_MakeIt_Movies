import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import PopularMoviesPage from './pages/PopularMoviesPage'
import TopRatedPage from './pages/TopRatedPage';
import LatestPage from './pages/LatestPage';
import UpcomingPage from './pages/UpcomingPage';
import NowPlayingPage from './pages/NowPlayingPage';
import './App.css';
class App extends React.Component {
  render(){
    return(
      <Router>
        <Link to='/popular'>Popular </Link> 
        <Link to='/latest'>Latest </Link> 
        <Link to='/now-playing'>Now Playing </Link> 
        <Link to='/top-rated'>Top Rated</Link> 
        <Link to='/upcoming'>Upcoming</Link> 

        <Switch>
        <Route exact path='/popular' component={PopularMoviesPage}/>
        <Route exact path='/latest' component={LatestPage}/>
        <Route exact path='/now-playing' component={NowPlayingPage}/>
        <Route exact path='/top-rated' component={TopRatedPage}/>
        <Route exact path='/upcoming' component={UpcomingPage}/>
        </Switch>
      </Router>
    )
  }

}

export default App;
