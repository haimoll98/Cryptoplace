import React, { useContext } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const currencyHandler = (event)=> {
    switch (event.target.value) {
      case "usd" : {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
      case "eur" : {
        setCurrency({name: "eur", symbol: "€"})
        break;
      }
      case "inr" : {
        setCurrency({name: "inr", symbol: "₹"})
        break;
      }
      case "idr" : {
        setCurrency({name: "idr", symbol: "Rp"})
        break;
      }
      default : {
        setCurrency({name: "usd", symbol: "$"})
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} className='logo' alt="Logo" />
      </Link>
        <ul>
           <Link to={'/'}><li>Home</li></Link> 
            <Link to={'#'}><li>Features</li></Link>
            <Link to={'#'}><li>Pricing</li></Link>
            <Link to={'#'}><li>Blog</li></Link>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="idr">IDR</option>
            </select>
            <button>Sign Up <img src={arrow_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar