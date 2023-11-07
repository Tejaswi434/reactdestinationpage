import {Component} from 'react'
import Item from '../DestinationItem'

class DestinationSearch extends Component {
  state = {search: ''}

  changesearch = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {search} = this.state

    const filterdata = destinationsList.filter(each =>
      each.name.toLowerCase().includes.search.toLowerCase(),
    )
    return (
      <div>
        <h1>Destination Search </h1>
        <input type="search" onChange={this.changesearch} value={search} />

        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />

        <ul>
          {filterdata.map(each => (
            <Item destinationitem={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
