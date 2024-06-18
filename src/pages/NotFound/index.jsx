import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import notfoundimage from "../../assets/notfound.svg";

import "./NotFound.css";

const NotFound = () => {
    let navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    return (
        <div className="notfound-page">
            <img src={notfoundimage} alt="Página não encontrada" />
            <p>Página não encontrada</p>
            <Button onClick={handleBack}>
                Voltar
            </Button>
        </div>
    )
}

export default NotFound;
