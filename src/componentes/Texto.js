import { Text } from "react-native";
import { StyleSheet } from "react-native";

//Component para aplicar a font Montserrat para todos os textos e não precisar ficar adicionando toda hora
export default function Texto({ children, style }){
    let estilo = estilos.texto;

    //A interrogação serve para ele só verificar se existir a variável style
    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
})