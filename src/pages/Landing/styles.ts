import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,        
    },
    header: {
        height: 350,         
        backgroundColor: '#8257E5',
        justifyContent: 'center',        
        flexDirection: 'row',
        alignItems: 'center'                
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    iconPrimary: {
       alignSelf: 'flex-start',
       marginTop: '7%',
       marginLeft: '70%'
    },
    imagemHeader: {
        
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#6A6180',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 10,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold'
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '40%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between',
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecundary: {
        backgroundColor: '#04d361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 13,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 26
    }



});


export default styles;