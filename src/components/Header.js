import PropTypes from 'prop-types' 
import logo from './Logo_CPU.svg'

const Header = ({ title }) => {
    return (
        <header className = 'header'>
            <h1 className='centreColumn'><img className = 'logoCPU' src = {logo} alt='Logo'/>CNN Weed Classifier</h1>
        </header>
    )
}

export default Header
