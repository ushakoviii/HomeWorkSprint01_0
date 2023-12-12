
import React from 'react';
import './App.css';
import {DivBox, MainDivBox} from "./components/DivBox";
import {TextTitle} from "./components/StyledText";
import {StyledButton} from "./components/StyledButton";
import {myTheme} from "./components/myTheme";
import {Imag} from "./components/Image";
import rectangle from "./rectangle.png";


function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <MainDivBox>
            <DivBox>
                <Imag src={rectangle}/>
                <TextTitle textSize={"16px"} color={"black"}>Headline</TextTitle>
                <TextTitle textSize={"12px"} color={`${myTheme.colors.textColor}`}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.</TextTitle>
                <span>
                    <StyledButton primary>See more</StyledButton>
                    <StyledButton secondary>Save</StyledButton>
                </span>
            </DivBox>
        </MainDivBox>
    );
}
export default App;