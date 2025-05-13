import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  background-color: ${theme.colors.light};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  * {
    color: ${theme.colors.darktext};
    font-weight: 500;
    font-family: 'Poppins', cursive;
  }

  .containerTop {
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas:
      'title title'
      'items itemsPrice'
      'deliveryTax taxPrice';

    .title {
      grid-area: title;
      font-weight: 700;
      text-align: center;
      color: ${theme.colors.lighttext};
      background-color: ${theme.colors.dark};
      width: 100%;
      padding: 12px;
      border-top-right-radius: 20px;
      border-top-left-radius: 20px;
    }
    .items {
      grid-area: items;
      padding-left: 20px;
    }
    .itemsPrice {
      grid-area: itemsPrice;
      padding-right: 20px;
    }
    .deliveryTax {
      grid-area: deliveryTax;
      padding-left: 20px;
    }
    .taxPrice {
      grid-area: taxPrice;
      padding-right: 20px;
    }
  }

  .containerBottom {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-top: 24px;
    padding: 20px;

    * {
      color: ${theme.colors.darktext};
      font-weight: 600;
      font-family: 'Lolita One', cursive;
    }
  }
`
