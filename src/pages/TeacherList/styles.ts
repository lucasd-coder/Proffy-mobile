import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 10,        
    },
    find: {
        height: 18,
        width: 18,
        marginLeft: 50       
    },

    totalProffy: {
        marginLeft: 4,
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 18,
        color: '#D4C2FF',                    
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '40%',
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    containerFind: {
        justifyContent: 'center',
        textAlign: "center",
        flexDirection: 'row',
        marginBottom: '30%',
        marginLeft: '50%',               

    },

    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },
    containerFilter: {
       position: 'absolute',
       flexDirection: 'row',
       marginTop: 30,           
       paddingTop: 70,
    //    marginLeft: '6%'
                                       
    },
    textFilter: {
        marginLeft: 8,
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 19,
        color: '#D4C2FF',
        marginRight: 20
    },
    filterLine: {               
        position: 'absolute',
        borderBottomWidth: 2,
        borderBottomColor: '#9871F5',
        width: 316,
        height: 100,
        margin: 10,           
    },
    imageFilterVisible: {        
      marginLeft: 30
    }
});

export default styles;