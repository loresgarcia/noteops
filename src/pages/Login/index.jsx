import Button from "../../components/Button";
import Logo from "../../components/Logo";
import logoImg from '../../assets/logo.png'
import './Login.css'

export default function Login() {
    return (
        <div className='login-page'>
                <Logo
                    src={logoImg}
                    width="380px"
                />
                <Button>Entrar</Button>
            </div>
    )
}