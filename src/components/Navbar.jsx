import './Navbar.css'

function Navbar() {
    return (
        <header className='header'>
            <img className='header__img' src="./images/logo.svg" alt='logo' />
            <button className='header__btn'>Free Consultation</button>
        </header>
    )
}

export default Navbar;