import PropTypes from 'prop-types' 

const Header = ({ title }) => {
    return (
        <header className = 'header'>
            <h1>CNN Weed Classifier</h1>
            <img src = '../../public/Logo_CPU.png' alt='Logo' width='42' height='42'/>
        </header>
    )
}

export default Header
