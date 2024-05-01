import './signature.css';

import Sergio from '../../assets/serchtec-logo.png';

function Signature(){
    return(
        <div className="signature">
            <p className='signature--name'>Developed by Sergio Cobos</p>
            <img className='signature--img' src={Sergio} alt="Sergio's Logo" />
        </div>
    );
}

export { Signature };