// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

function CryptocurrenciesList(props) {
  const {listItems} = props
  return (
    <>
      <div className="main-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="card-container">
          <div className="nav-container">
            <p>Coin Type</p>
            <div className="nav-items">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </div>
          <ul className="ul-container">
            {listItems.map(each => (
              <CryptocurrencyItem eachItem={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CryptocurrenciesList
