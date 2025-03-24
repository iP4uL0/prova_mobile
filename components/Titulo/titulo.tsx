import { View } from "react-native"
import { Subtitulo, Titulo } from "./style"

// Fabrincando um novo tipo para ser usado como base do meu
// componente de texto estilizado

type TitleProps = {
    texto : string,
    flag: boolean
}

// os : indicam que determinada coisa assumirá o 
// tipo do que esta escrito na frente

export default function Title({texto, flag} : TitleProps){
    return(
        <View>
            {flag == true ? 
                <Titulo>{texto}</Titulo> 
                :
                <Subtitulo>{texto}</Subtitulo>
            }
        </View>
    )
}