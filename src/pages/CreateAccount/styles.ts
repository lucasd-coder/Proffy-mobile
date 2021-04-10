import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',            
            padding: 0,           
        },
        section: {
            alignSelf: 'flex-start',
            marginLeft: 32,
            maxWidth: 280,
            marginBottom: 40,           
        },
        title: {
            fontFamily: 'Poppins_600SemiBold',
            color: '#32264D',
            fontSize: 32,
            lineHeight: 42,
            marginLeft: 10,
            marginBottom: 30,
        },
        subTitle: {
            fontFamily: 'Poppins_400Regular',
            fontSize: 14,
            lineHeight: 24,
            color: '#6A6180',
            marginLeft: 10,
        },
        titleForm: {
            fontFamily: 'Poppins_600SemiBold',
            color: '#32264D',
            fontSize: 24,
            lineHeight: 26, 
            marginBottom: 40        
        },
        button: {
            marginTop: 20,
            
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
            marginRight: 20,  
            
        },
        checkboxSegundary: {
            width: 10,
            height: 10,
            borderRadius: 5,
        },
        header: {
            alignItems: 'center',
            justifyContent: "space-between",
            flexDirection: 'row',
            marginTop: 40,
            marginBottom: 40,
            marginLeft: 40
        },
        containePagePrimary: {
            alignItems: 'center',
            justifyContent: 'center',            
        },
        containeSegundary: {
            alignItems: 'center',
            justifyContent: 'center'
        },      
        form: {
            marginTop: 40, 
            padding: 0,
            paddingBottom: Platform.OS === 'android' ? 110 : 40,
        }
});

export default styles;
