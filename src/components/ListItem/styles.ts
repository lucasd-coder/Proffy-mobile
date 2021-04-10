import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerSelected: {
        width: 311,
        height: 64,
        padding: 0,
        paddingRight:16, 
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E6E6F0',             
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFC',
    },

    selectedPicker: {
        height: 50, 
        width: 311,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,
        color: '#6A6180'
    },

    label: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
        marginTop: 20
    },

    containerAvailableTime: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    labelAvailableTime: {
        color: '#9C98A6',
        fontFamily: 'Poppins_400Regular',
        marginTop: 20
    },
    
    inputAvailableTime: {
        flex: 1,
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 24,
        marginLeft: 20,
        color: '#6A6180'
    },

    inputContainerAvailableTime: {
        width: 139,
        height: 64,
        padding: 0,
        paddingRight:16, 
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E6E6F0',             
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFC',
        marginRight: 17,       
    },

    sectionDelete: {
        flexDirection: 'row',
        alignItems: "center",
        margin: -8,
        marginBottom: 15,
        marginTop: 4
    },

    sectionDeleteLine: {
        borderBottomWidth: 2,
        borderBottomColor: '#E6E6F0',
        width: 96,
        margin: 8,           
    },

    titleDelete: {
        fontSize: 12,
        fontFamily: 'Archivo_700Bold',
        lineHeight: 20,
        color: '#E33D3D',
        marginRight: 6,
        marginLeft: 6
    }
});

export default styles;