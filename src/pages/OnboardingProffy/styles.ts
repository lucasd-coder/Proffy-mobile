import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';


const styles = StyleSheet.create({
    numericProffy: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 40,
        lineHeight: 44,
        color: '#6A6180',
        opacity: 0.16,  
        marginBottom: 35      
    },
    titleProffy: {
        color: '#6A6180',
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        lineHeight: 34,
        maxWidth: 206,
    },
    container: {
        justifyContent: 'center',
        marginLeft: 40,
        marginTop: 60,
        
    },
    iconBack: {                
        justifyContent: 'space-between',
        marginTop: 70,
        marginLeft: 150
    }

});

export default styles;