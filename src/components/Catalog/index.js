import React from 'react'
import { connect } from "react-redux";

import Episodes from './Episodes'
import Seasons from './Seasons'
import ActivityIndicator from '../ActivityIndicator'

import { fetchShow, fetchShowSeason } from '../../actions/showActions'
import { favoriteShow, fetchFavoritesIfNeeded } from '../../actions/userActions'

class Index extends React.Component{
  componentDidMount(){
    const {match: {params}, dispatch } = this.props
    dispatch( fetchFavoritesIfNeeded() )
    dispatch( fetchShow(params.id) ).then(res=>{
      const season = res.seasons[0]
      this.props.dispatch( fetchShowSeason(params.id, season.season_number ) )
    })
  }
  onClickSeason(e){
    const {match: {params}} = this.props
    const season = e.currentTarget.getAttribute('data-season')

    this.props.dispatch( fetchShowSeason(params.id, season) )
  }

  onClickFavorite(item){
    this.props.dispatch( favoriteShow({id: item.id, name: item.name, poster_path: item.poster_path}) ) 
  }

  render(){
    const { show: {data, season}, user: { favorites }  } = this.props
    const { show } = this.props
        
    const favorite = ()=>{
      return favorites.find(i=> i.id === data.id )
    }

    const img = data && data.poster_path ? `https://image.tmdb.org/t/p/w342/${data.poster_path}` : 'http://via.placeholder.com/300x450?text=No+Image'
    return <div className="container">
      {
        !show.fetching && data
        ?
          <div className="detail">
            <aside>
              <img src={img} alt=""/>
              <div>
                <button className={`btn-favorite ${favorite() ? 'active' : ''}`} onClick={ this.onClickFavorite.bind(this, data) }>
                  <i className="fa fa-heart-o"></i> {favorite()? 'Favorited' : 'Favorite'}                  
                </button>
              </div>
              <h1>{data.name}</h1>
              <p>{data.overview}</p>

            </aside>
            <section className="content">
              <h1>{data.name}</h1>

              <Seasons season={season} items={data.seasons} onClick={this.onClickSeason.bind(this) } />
              <Episodes season={season} />
            </section>
          </div>
        : 
          <ActivityIndicator />
      }
    </div>
  }
}

const mapStateToProps = state => ({
  show: state.show,
  user: state.user
});


export default connect(mapStateToProps)(Index);
