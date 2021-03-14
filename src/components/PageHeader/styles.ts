import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 70,
        backgroundColor: '#8257e5'
    },
   containerTopBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 400,
        margin: 0,
        padding: 40,
        position: 'absolute',
        backgroundColor: '#774DD6',
        flex: 1        
    },   
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',        
        marginTop: '15%',                                                   
    },
    
    titleHeader: {        
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 15,
        color: '#D4C2FF',
        
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 210,
        marginVertical: 40,        
        marginBottom: '40%',
    },
    


});

export default styles;