// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList/index'
import './index.css'

class Cryptocurrency extends Component {
  state = {
    listItems: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({listItems: updatedData, isLoading: false})
  }

  render() {
    const {listItems, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Rings" color="#00e7ff" height={100} width={100} />
          </div>
        ) : (
          <CryptocurrenciesList listItems={listItems} />
        )}
      </>
    )
  }
}

export default Cryptocurrency
