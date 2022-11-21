import './Navbar.css'

function Navbar() {
    return (
        <header className='header'>
        <a href='#'>
            <img className='header__img' src="./images/logo.svg" alt='logo' />
        </a> 
            <button className='header__cta'>Free Consultation</button>
        </header>
    )
}

export default Navbar;