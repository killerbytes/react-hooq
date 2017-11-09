import React from 'react'
import { connect } from "react-redux";

import { favoriteShow, fetchFavoritesShows } from '../../actions/userActions'
import Favorites from './Favorites'

class Index extends React.Component{
  componentDidMount(){
    this.props.dispatch( fetchFavoritesShows() )
  }

  onClickFavorite(item){
    this.props.dispatch( favoriteShow({id: item.id, name: item.name, poster_path: item.poster_path}) ) 
  }

  render(){
    const { user: {favorites} } = this.props
      
    return <div className="container">
      <Favorites items={favorites} onClick={ this.onClickFavorite.bind(this) } />
    </div>
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Index);
