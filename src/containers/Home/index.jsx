import { CategoryCarousel, OffersCarousel } from "../../components";
import { Banner, Container, Content } from "./styles";

export function Home() {
    return (
        <main>
            <Banner>
            <h1>Bem-Vindo(a)!</h1>
        </Banner>
        <Container>
           <Content>
           <CategoryCarousel/>
           <OffersCarousel />
           </Content>

        </Container>
        </main>
    )
}