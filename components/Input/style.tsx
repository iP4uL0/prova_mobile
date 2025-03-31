import styled from "styled-components/native";

type CampoDeTextoProps = {
    erro: boolean
}

export const CampoTexto = styled.TextInput<CampoDeTextoProps>`
    background-color: #fff;
    font-size: 18px;
    padding: 20px;
    border-radius: 6px;
    border: 2px solid ${({erro} : 
    {erro: boolean}) => erro ? '#E63946' : '#33415C'};
`