class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  handleSelectChange = (e) => {
    this.setState({
      currency: e.target.value
    })
  }

  render() {
    const { currency } = this.state
    const { bpi } = this.props

    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">Bitcoin rate for {bpi[currency].description}: 
          <span className="badge badge-primary ml-1">{bpi[currency].code}</span> 
          <strong className="ml-1">{bpi[currency].rate}</strong>
        </li>
        </ul>
        <br/>
        <select onChange={this.handleSelectChange} className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    )
  }
}

export default Prices