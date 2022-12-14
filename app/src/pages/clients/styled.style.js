import styled from "styled-components";
import minera from './img/logo-vet-minera-engenharia.png'

export const BlockContainer = styled.div`
    border: 4px solid #5F9DF7;
    margin: 10px;
    padding: 20px;
    margin-top: 5em;
    border-radius: 20px;
`

export const HeaderBlock = styled.div`
    margin-top: 4em;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 5em;
    display: flex;
`

export const MineraLogo = styled.img`
    max-width: 400px;
    text-align: center;
    padding: 0;
    margin: 0;
`

export const HeaderInfo = styled.div`
    padding: 0;
    margin: 0;
    flex-direction: column;
    text-align: center;
    line-height:0.5;
`

export const BlockCompany = styled.div`
    border: 4px solid #5F9DF7;
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    flex-direction: column;
    width: 100%
    flex-grow: 1;
    margin-right:1em;
    margin-left:1em;
    font-size: 1.25em;
`

export const InformationCredit = styled.div`
    margin-top: 1em;
`

export const MonthCredit = styled.div`
    border: 4px solid #5F9DF7;
    padding: 20px;
    text-align: center;
    font-size: 16px;
    flex-grow: 1;
    margin: 1em;
    border-radius: 20px;
`

export const NumberInstallation = styled.div`
    border: 4px solid #5F9DF7;
    padding: 20px;
    text-align: center;
    font-size: 16px;
    flex-grow: 1;
    margin: 1em;
    border-radius: 20px;
`

export const InfoNormal = styled.div`
    border: 4px solid #5F9DF7;
    padding: 20px;
    text-align: center;
    flex-grow: 1;
    margin: 1em;
    border-radius: 20px;
`

export const PaymentButton = styled.button`
    margin: 4px;
    color: white;
    padding: 8px;
    background-color: #5F8D4E;
    border: 2px solid #5F8D4E;
    border-radius: 5px;
    text-decoration: none;
    &:hover{
        color: #5F8D4E;
        text-decoration: none;
        background-color: white;
        border: 2px solid #5F8D4E;
    }
`

export const Title = styled.div`
    flex-grow: 1;
    font-weight: 900;
`

export const BlockInfo = styled.div`
    margin-top: 2em;
    text-align: center;
`

export const Block = styled.div`
    border: 2px solid #5F9DF7;
    padding: 3em;
    border-radius: 25px;
    margin-right:1em;
    margin-left:1em;
    margin-bottom:3em;
`

export const HeaderBlockInfo = styled.div`
    margin-top: 5px;
    margin-bottom: 1em;
    padding: 2em;
`

export const BackgroundBlock = styled.div`
    opacity: 0.15;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-position: center;
    background-image:url(${minera});
    background-repeat: no-repeat; 
`

export const ImageBlock = styled.div`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
`

export const RowInfo = styled.div`
    margin-right:1em;
    margin-left:1em;
    display: flex;
    column-gap: 5em;
    flex-wrap: wrap;
`

export const RowCompany = styled.div`
    width: 100%;
    color: black;
`

export const TitleBlock = styled.div`
    text-size: 1em;
    text-align: center;
`
export const ContentBlock = styled.div`
    border: 2px solid #5F9DF7;
    padding: 1em;
    border-radius: 25px;
    font-size: 1.5em;
    font-weight: bold;
    color: black;
`