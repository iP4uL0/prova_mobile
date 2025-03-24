import { useEffect, useState } from "react";
import styled from "styled-components/native"

export default function Estados(){

    const [contador, setContador] = useState(0)
    
    useEffect(() => {
        console.log("Componente montado!");
      }, []);

      useEffect(() => {
        console.log("O estado do componente mudou!");
      }, [contador]);

      useEffect(() => {

        // A reação de desmontagem só acontece quando
        // o sistema detecta efetivamente uma limpeza de alguma coisa
        // geralmente quando a pagina é trocada
        // Ou uma conexão com API é encerrada

        return () => {
          console.log("Componente desmontado!");
        };
      }, []);

    return(
        <Tela>
            <Contagem>
                {contador}
            </Contagem>
            <Botao 
                onPress={()=>{
                    setContador(contador + 1)
                }}
            >
                <TextoBotao>Clique em mim</TextoBotao>
            </Botao>
        </Tela>
    )
}

const Tela = styled.View`
    flex: 1;
    padding: 24px;

    justify-content: center;
    align-items: center;

    gap: 30px;
`

const TextoBotao = styled.Text`
    font-size: 20px;

    color: #ffff;
`

const Botao = styled.Pressable`
    justify-content: center;
    align-items: center;

    background-color: #00B4D8;

    padding: 22px;
    border-radius: 12px;
`

const Contagem = styled.Text`
    font-size: 30px;
`