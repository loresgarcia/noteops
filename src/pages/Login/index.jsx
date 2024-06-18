/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import logoImg from '../../assets/logo-light.png';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/main');
    };

    return (
        <div className='login-page'>
            <Logo
                src={logoImg}
                width="380px"
            />
            <Button onClick={handleLogin}>Entrar</Button>
        </div>
    );
}

export default Login;
