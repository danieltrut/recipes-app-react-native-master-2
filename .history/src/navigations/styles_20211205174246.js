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
    content: {
        flex: 0.1,

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: 20,

    }

});

export default styles;
