import styled from "@emotion/styled";
import Link from "next/link";

//Colores
export const colors = {
    primary:"#EB0000",
    theme:"#F2B023",
    light1: "#FF6A16",
    light2: "#FF6A52",
    dark1: "#AD311D",
    dark2: "#CDA400",
    dark3: "#030303",
    red: "#E20D0D",
    white: "#FFFFFF"
}

//Styled components
export const StyledContainer = styled.div ` 
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(/assets/2-1.jpg);
    background-size: cover;
    background-attachment: fixed;
`;

//Home
export const StyledTitle = styled.h2` 
    font-size: ${(props) => props.size}px;
    text-align: center;
    color:  ${(props) => props.color};
    padding: 5px;
    margin-bottom: 20px;
`; 
export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color:  ${(props) => props.color};
    padding: 5px;
    margin-bottom: ${(props) => props.margin}px;
`;
export const Avatar = styled.div` 
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 50px;
    background-image: url(${props  => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
`;
export const Avatar2 = styled.div` 
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    border-radius: 100px;
    background-image: url(${props  => props.image});
    background-size: cover;
    background-position: center;
`;


export const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 55px;
`;
export const StyleButtonNew = styled(Link)` 
    padding: ${(props) => props.padd}px;
    width 350px;
    background-color: transparent;
    font-size: 25px;
    border: 3px solid ${(props) => props.border};
    border-radius: 22px;
    color: #0058ab;
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    position: absolute;
    top: 94.2%;
    left: 74.2%;
    font-style: italic;
    font-weight: bold;
    &:hover{
        background-color: ${(props) => props.bg};
        color: #82acb0;
        cursor: pointer;
        border: 3px solid ${(props) => props.border2};
    }
`;
export const StyleButtonCancel = styled(Link)` 
    padding: ${(props) => props.padd}px;
    width 150px;
    background-color: transparent;
    font-size: 25px;
    border: 3px solid ${(props) => props.border};
    border-radius: 22px;
    color: #d33131;
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    position: absolute;
    top: 91.7%;
    left: 75.2%;
    font-style: italic;
    font-weight: bold;
    &:hover{
        background-color: ${(props) => props.bg};
        color: #de8484;
        cursor: pointer;
        border: 3px solid ${(props) => props.border2};
    }
`;

export const StyleButtonGo = styled(Link)` 
    padding: ${(props) => props.padd}px;
    width 150px;
    background-color: transparent;
    font-size: 25px;
    border: 3px solid ${(props) => props.border};
    border-radius: 22px;
    color: cornflowerblue;
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    position: absolute;
    top: 91.7%;
    left: 86.2%;
    font-style: italic;
    font-weight: bold;
    &:hover{
        background-color: ${(props) => props.bg};
        color: ${(props) => props.color2};
        cursor: pointer;
        border: 3px solid ${(props) => props.border2};
    }
`;

//Input
export const StyledTextInput = styled.input`
    width: 280px;
    padding: 15px;
    padding-left: 50px;
    font.Size: 17px
    letter-spacing:1px;
    color: ${colors.light1};
    border: 0;
    display:block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.onInvalid && `backgroud.color: ${colors.red}; color: ${colors.primary};`}

    &:focus {
        backgroud-color: ${colors.dark2};
        color: ${colors.dark3};
    }
`;
export const StyledLabel = styled.p`
    text-align: left;
    font-size 14px;
    font-weight: bold;
`;

export const StyledFormArea = styled.div`
    background-color: ${props => props.bg ||
    colors.white};
    text-align: center;
    padding: 45px 55px
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width 160px;
    background-color: transparent;
    font-size: 25px;
    border: 3px solid ${colors.light2};
    border-radius: 22px;
    color: ${colors.light2};
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover{
        background-color: ${colors.light2};
        color: ${colors.dark3};
        cursor: pointer;
        border: 3px solid ${colors.light2};
    }
`;