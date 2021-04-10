import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contaier: {
        width: 311,
        height: 64,
        padding: 0,
        paddingRight:16, 
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E6E6F0',             
        flexDirection: 'row',
        alignItems: 'center',
    },
   
    textInput: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,
        marginLeft: 20,
        color: '#6A6180'
    },
    icon: {
        marginRight: 16
    }
});

export default styles;