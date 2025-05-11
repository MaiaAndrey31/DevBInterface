import { theme } from "../../styles/theme";
import { Container } from "./styles";
import { Copyright } from "@phosphor-icons/react";


export function Footer(){

    return (

        <Container>
            <p>Desenvolvido por Andrey Maia - 2025 <Copyright size={22} color={theme.colors.dark} weight="bold"/> Todos os direitos reservados</p>
        </Container>
    )
}