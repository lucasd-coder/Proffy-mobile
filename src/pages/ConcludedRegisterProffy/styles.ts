import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',            
        alignItems: 'center',
        backgroundColor: '#8257E5',
        textAlign: "center"               
    },
    
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 164,
        marginBottom: 20,
        textAlign: "center",
   
    },
    subTitle: {
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 14,
        lineHeight: 24,
        maxWidth: 260,
        textAlign: "center",
    },
    button: {
        backgroundColor: '#04D361',
        marginBottom: 40,
        lineHeight: 26,
    }

});

export default styles;