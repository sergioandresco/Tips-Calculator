import Calculator from '../../assets/calculator.png';

import './header.css';

function Header(){
    return(
        <header className='header'>

            <div className='header--bx1'>
                <h1 className='bx1--title'>TIPS CALCULATOR</h1>
            </div>

            <div className='header--bx2'>
                <img className='bx2--img' src={Calculator} alt="Calculator Logo" />
            </div>

        </header>
    );
}

export { Header };