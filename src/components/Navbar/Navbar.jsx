import './style.css'
import Button from 'react-bootstrap/Button';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
         
     
    <div className='menu'>
         
        <ul className="lista">  
            <li class="opciones"><a href="#">Indumentaria</a></li>
            <li class="separator">|</li>
            <li class="opciones"><a href="#">Paletas</a></li>
            <li class="separator">|</li>
            <li class="opciones"><a href="#">Calzados</a></li>
            <li class="separator">|</li>
            <li class="opciones"><a href="#">Accesorios</a></li>

           

        </ul>      

        
        <div className='Carrito'>
                <CartWidget/>
            </div>

            <div>
                <Button> Botton Bootstrap </Button>
            </div>
        </div>

        





    )
};

export default Navbar; 