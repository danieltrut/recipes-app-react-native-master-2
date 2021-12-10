import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerMenu: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        flexDirection: 'row',
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 180,
        padding: 8,
        margin: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    },
    btnIcon: {
        height: 17,
        width: 17
    },
    categoriesItemContainer: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 215,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 20,
    },
    categoriesPhoto: {
        width: '100%',
        height: 155,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3
    },
    categoriesName: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginTop: 8
    },
    categoriesInfo: {
        marginTop: 3,
        marginBottom: 5
    }
});

export default styles;
