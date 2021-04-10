import { Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f0f0f7',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        paddingBottom: Platform.OS === 'android' ? 120 : 40,
    },
    header: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#8257E5', 
        width: '100%',
        height: 350, 
        marginBottom: 30,        
        left: 0,
        right: 0
    },

    
    form: {
        justifyContent: 'space-between',
        alignItems: 'center',  
       
    },
    section: {
        flexDirection: 'row',
        alignItems: "center",
        marginBottom: 15,
        justifyContent: 'space-between',
        alignSelf: "stretch",
        marginLeft: 40,
        marginRight: 40,
        marginTop: 15       
    },
    forgotIt:{
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        fontSize: 12,
        lineHeight: 24
    },
    remember:{
        fontFamily: 'Poppins_400Regular',
        color: '#9C98A6',
        fontSize: 12,
        lineHeight: 24,
        marginRight: 70,
        marginLeft: 10
        
    },
    title: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#32264D',
        fontSize: 24,
        lineHeight: 34,
        marginRight: 10
    },
    linkCriate: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 12,
        lineHeight: 24,
        color: '#8257E5'
    },
    checkbox: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E6E6F0',
        borderWidth: 1,
        borderRadius: 8,
        width: 24,
        height: 24
    },
    

});

export default styles;