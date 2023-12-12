//Создание глобальных стилей для всего документа
import {createGlobalStyle} from "styled-components";
import {myTheme} from "./myTheme";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }

  body {
    background-color: #f6f6f6;
    font-family: ${myTheme.fontText.fontTextOne};
  }
`