import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    numericProffy: {
        fontFamily: 'Archivo_400Regular',
        fontSize: 40,
        lineHeight: 44,
        color: '#6A6180',
        opacity: 0.16,  
        marginBottom: 35      
    },
    containerPrimary: {    
        height: 350,         
        justifyContent: 'center',
        alignItems: "center", 
        backgroundColor: '#8257E5'         
    },
    containerSegundary: {    
        height: 350,         
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#04D361'        
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
        backgroundColor: '#f0f0f7'
        
    },
    iconBack: {          
        marginLeft: 40, 
    },
    footer: {        
        alignItems: 'center',
        justifyContent: "space-around",
        flexDirection: 'row',
        marginBottom: 40,
    },
    checkboxPrimary: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
          
    },
    checkbox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        marginRight: 80,  
        
    },
    checkboxSegundary: {
        width: 10,
        height: 10,
        borderRadius: 5,
    }


});

export default styles;