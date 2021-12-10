import { StyleSheet } from 'react-native';
import { RecipeCard } from '../AppStyles';

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
    btnClickContain: {
        borderRadius: 10,
    },
    content: {
        flex: 0.1,

    },
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    menuContainer: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#fff',
        alignSelf: "flex-start",
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0

    },
    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title,
    category: RecipeCard.category

});

export default styles;
