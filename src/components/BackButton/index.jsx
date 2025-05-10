import { useNavigate } from "react-router-dom";
import { Button, Container } from "./styles";
import Back from '../../assets/leftWhite.svg'



export function BackButton(){

    const navigate = useNavigate();

    return (
        <Container>
            <Button onClick={() => navigate({
                pathname: '/',
            })}><img src={Back}/>
            Voltar</Button>
        </Container>
    )
}