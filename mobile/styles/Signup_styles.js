import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141326',
    },

    upper: {
        flex: 1,
        alignItems: 'center'
    },

    lower: {
        flex: 1
    },

    box: {
        width: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 30,
        padding: 20,
        position: 'absolute',
        top: 150,
        alignSelf: 'center',
    },

    big: {
        color: '#ffffff',
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
        position: 'absolute',
        top: 75,
    },

    small: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        position: 'absolute',
        top: 120,
    },

    label: {
        marginBottom: 5,
        fontWeight: '500'
    },

    input: {
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 8,
        padding: 10,
        paddingRight: 45,
        fontSize: 16,
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },

    eyeIcon: {
        position: 'absolute',
        right: 8,
        top: '10%',
        padding: 5
    },

    button: {
        backgroundColor: '#1300BC',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },

    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16
    },

    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 5,
    },

    signup: {
        textAlign: 'center',
        color: '#555'
    },

    signUpLink: {
        color: '#0000EE',
        fontWeight: '600'
    },

    orContainer: {
        marginVertical: 15,
        alignItems: 'center',
        position: 'relative',
    },

    orLine: {
        position: 'absolute',
        top: '50%',
        left: 0,
        right: 0,
        height: 1,
        backgroundColor: '#ccc',
    },

    orText: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        color: '#555',
        fontSize: 14,
    },

    google: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 10,
    },

    googleText: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: '500'
    },
});
