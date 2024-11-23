import { createGlobalStyle } from 'styled-components'

const globalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}
button {
    cursor: pointer;
}
.lilita-one-regular {
  font-family: "Lilita One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-bold {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
}
.road-rage-regular {
  font-family: "Road Rage", sans-serif;
  font-weight: 400;
  font-style: normal;
}

`

export default globalStyles
