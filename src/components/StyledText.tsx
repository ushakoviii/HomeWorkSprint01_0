import styled from "styled-components";
import {myTheme} from "./myTheme";
export const TextTitle =styled.p<TextTitlePropsType> `
  max-width: 260px;
  max-height: 40px;
  font-weight: bold;
  line-height: 20px;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 0px;
  font-size: ${props => props.textSize};
  color: ${props => props.color};
  
`
type TextTitlePropsType = {
    textSize?: string;
    color?: string;
}
//Создание компоненты TextHeader на основе стилей TextTitle
export const TextHeader = styled(TextTitle)`
  color: ${props => props.color};
  font-size: ${props => props.textSize};
`
type TextHeader = {
    textSize?: string;
    color?: string;
}

