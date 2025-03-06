import { 
    View, 
    Text, 
    TextInput,
    Pressable,
    StyleSheet } from "react-native";

export default function App(){
    return(
    <View style={estilo.tela}>
        <Text style={estilo.titulo}>Entrar</Text>
        <View style={estilo.container_campos_texto}>
            <TextInput 
                placeholder="Digite seu e-mail..." 
                placeholderTextColor={'#6C757D'}
                style={estilo.campo_texto}
            />
            <TextInput 
                placeholder="Digite sua senha..." 
                placeholderTextColor={'#6C757D'}
                style={estilo.campo_texto}
            />
        </View>
        <View style={estilo.container_botoes}>
            <Pressable style={estilo.botao}>
                <Text style={estilo.texto_botao}>Entrar</Text>
            </Pressable>
            <Text style={estilo.links}>Cadastre-se</Text>
            <Text style={estilo.links}>Esqueci a senha</Text>
        </View>
    </View>)
}

const estilo = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#33415C',
        padding: 26
    },
    titulo: {
        fontSize: 56,
        fontWeight: 'bold',
        color: '#ffff',
        marginTop: 80,
        marginBottom: 80
    },
    container_campos_texto: {
        gap: 25
    },
    campo_texto: {
        backgroundColor: '#fff',
        fontSize: 18,
        textAlignVertical: 'center',
        paddingHorizontal: 16,
        padding: 20,
    },
    container_botoes: {
        marginTop: 65,
        gap: 20
    },
    botao: {
        backgroundColor: '#fff',
        padding: 20
    },
    texto_botao : {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    links: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16
    }
})