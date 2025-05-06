import { CategoryCarousel } from "../../components/CategoryCarousel";
import { OffersCarousel } from "../../components/OffersCarousel copy";
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