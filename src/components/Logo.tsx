import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <Link className='navbar-brand' to='/'>
        <img src={logo} alt="Cash money" width={48} height={48} className='rounded-circle'/>  
    </Link>
  )
}

export default Logo