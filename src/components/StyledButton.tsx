import styled, {css} from "styled-components";
import {myTheme} from "./myTheme";
export const StyledButton = styled.button<StyledButtonPropsType>`
  font-family: Arial;
  font-weight: bold;
  width: 86px;
  height: 30px;
  margin: 20px 0px 0px 20px;
  border: 2px solid ${myTheme.colors.blueColor};
  border-radius: 5px;
  font-Size: 10px;
  cursor: pointer;

  ${props => props.primary && css<StyledButtonPropsType>`
    color: ${myTheme.colors.whiteColor};
    background-color: ${myTheme.colors.blueColor};
    &:hover {
      background-color: ${myTheme.colors.whiteColor};
      color: ${myTheme.colors.blueColor};
    }
  `}

  ${props => props.secondary && css<StyledButtonPropsType>`
    color: ${myTheme.colors.blueColor};
    background-color: ${myTheme.colors.whiteColor};
    margin: 20px 0px 0px 12px;
    &:hover {
      background-color: ${myTheme.colors.blueColor};
      color: ${myTheme.colors.whiteColor};
    }
  `}

`
//Типизация пропсов для компоненты StyledButton
type StyledButtonPropsType = {
    primary?: boolean;
    secondary?: boolean;
    }
