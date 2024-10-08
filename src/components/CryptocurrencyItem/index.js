// Write your JS code here
import './index.css'

function CryptocurrencyItem(props) {
  const {eachItem} = props
  const {currencyName, currencyLogo, euroValue, usdValue} = eachItem
  console.log(props)
  return (
    <li className="list-container">
      <div className="inner-div">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="inner-div2">
        <p className="currency">{usdValue}</p>
        <p className="currency">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
