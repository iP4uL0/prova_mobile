import { useState } from "react"
import styled from "styled-components/native"

export default function Contador(){

    // Usando o hook useState para controlar e manipular
    // o estado "contador" criando dentro do component
    const [contador, setContador] = useState(0)
    
    return(
        <Tela>
            <Contagem>{contador}</Contagem>
            {
            /* 
                Toda vez que o botão for pressionado, a contagem
                aumenta
            */}
            <Botao
                onPress={()=>{
                    setContador(contador + 1)
                }}
            >
                <TextoBotao>Aumentar a contagem</TextoBotao>
            </Botao>
        </Tela>
    )
}

//Estilização simples usando styled-components
const Tela = styled.View`
    flex: 1;
    padding: 24px;

    justify-content: center;
    align-items: center;
`

const Contagem = styled.Text`
    font-size: 40px;
    justify-content: center;

    margin-bottom: 60px;
`

const Botao = styled.Pressable`
    background-color: #4D5382;

    justify-content: center;
    align-items: center;

    padding: 26px;

    border-radius: 12px;
`

const TextoBotao = styled.Text`
    font-size: 20px;

    color: #ffff;
`