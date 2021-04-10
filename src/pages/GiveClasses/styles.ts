import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerMain:{
        flex: 1
    },
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        overflow: 'hidden',
        padding: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    teacherList: {
        marginTop: -40,
    },

    title: {
        maxWidth: 240,
        marginBottom: '25%',
        marginRight: 10,
        marginLeft: -102
    },

    subTitle: {        
        fontFamily: 'Poppins_400Regular',
        color: '#D4C2FF',
        fontSize: 14,
        lineHeight: 24,
        marginLeft: -50             
    },

    header: {
      flexWrap: 'wrap'     
    },

    section: {
        marginBottom: 20    
    },

    titleSection: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264D',
        fontSize: 20,
        lineHeight: 30,
        marginLeft: -8   
    },

    titleSectionLine: {
        borderBottomWidth: 2,
        borderBottomColor: '#E6E6F0',
        width: 311,                   
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    avatarUpload: {
        width: 80,
        height: 80,
        borderRadius: 48,
        backgroundColor: "#9C98A6",
        justifyContent: 'center',
        alignItems: 'center'
    },

    textUpload: {
        color: '#ffff',
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        lineHeight: 24,
    },

    iconUpload:{         
        width: 30,
        height: 30,
        borderRadius: 22,        
        marginTop: 50,
        marginLeft: -25        
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,             
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 2
    },

    form: {

    },

    label: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
        marginTop: 20
    },

    inputContainer: {
        backgroundColor: '#FAFAFC'            
    },   

    textAreaContainer: {       
        borderWidth: 2,
        padding: 5,
        width: 311,         
        paddingRight:16, 
        borderRadius: 10,       
        borderColor: '#E6E6F0',
        backgroundColor: '#FAFAFC',
                                 
    },

    textArea: {
        height: 295,
        flex: 1,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,
        marginLeft: 20,
        color: '#6A6180',
        marginTop: 20
    },
   
    sectionOn: {       
        marginBottom: 20,
        marginTop: 40,        
    },
    sectionContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'      
    },

    sectionButtonAdd: {
        flexDirection: 'row',
        alignItems: 'center',       
    },

    sectionButtonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#8257E5',
        fontSize: 14,
        lineHeight: 26,
        marginRight: 10             
    },

    availableTime: {        
        flexDirection: 'row',        
    },

    footer: {
        backgroundColor: '#FAFAFC',
        height: 180,
        borderWidth: 1,
        borderColor: '#e6e6f0',
        padding: 20,
        flex: 0.3,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },

    footerSection: {
        flexDirection: 'row',
        alignItems: 'center',       
    },    

    button: {
        marginBottom: 20,
        backgroundColor: '#04D361'
    },

    textPrimary: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 20,
        color: '#8257E5'
    },

    textSegundary: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 20,
        color: '#A8A8B3'
    },

    footerMessage: {
        marginLeft: 20
    }

});

export default styles;
