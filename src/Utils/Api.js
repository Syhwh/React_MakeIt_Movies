import React from 'react';
import MoviesApi from '../moviesApi'
class Api extends React.Component {
  state = {
    results: [],
    loading: false,
    error: null
  }

  async componentDidMount() {
    this.setState({
      loading: true
    });
    try {
      const { data: { results } } = await MoviesApi.get(this.props.endpoint,{
        params:{
          api_key: process.env.REACT_APP_API_KEY
        }
      });
      this.setState({ results });
    } catch (error) {
      this.setState({ error });
    }finally{
      this.setState({
        loading:false
      })
    }

  }

render(){
  return this.props.children(this.state);
}

}

export default Api;