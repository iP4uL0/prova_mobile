import styled from "styled-components/native"
export default function Home(){
    return(
        <Tela>
            <Texto>Bem vindo</Texto>
        </Tela>
    )
}
const Tela = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Texto = styled.Text`
    font-size: 30px;
`
