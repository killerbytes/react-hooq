import React from 'react'
import { connect } from "react-redux";

import Filters from './Filters'
import List from './List'
import ActivityIndicator from '../ActivityIndicator'

import { fetchDiscoverShow } from '../../actions/discoverActions'




class Index extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      sort_option: 'popularity.desc'
    }
  }
  componentDidMount(){
    this.props.dispatch( fetchDiscoverShow(this.state.sort_option ) )
  }

  onCheckSort(e){
    this.props.dispatch( fetchDiscoverShow(e.currentTarget.value) )
    this.setState({
      sort_option: e.currentTarget.value
    })
  }

  render(){
    const {fetching, collection: {results} } = this.props.discover
    return <div className="container">
      <Filters checked={this.state.sort_option}  onChange={ this.onCheckSort.bind(this) } />
      {
        !fetching
        ?
          <List items={results} />
        :
          <ActivityIndicator />      
      }
      </div>
  }
}


const mapStateToProps = state => ({
  discover: state.discover
});


export default connect(mapStateToProps)(Index);
