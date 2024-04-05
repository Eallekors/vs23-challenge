import logo from '../assets/logo.jpg'
import Button from './UI/Button'

const Header = () => {
    const handleButtonClick = () => {
        // Handle button click event
        console.log('Button clicked');
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly onClick={handleButtonClick}>Cart (0)</Button>
            </nav>
        </header>
    )
}

export default Header