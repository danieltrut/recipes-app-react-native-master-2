import { StyleSheet } from 'react-native';
import { RecipeCard } from '../AppStyles';

const styles = StyleSheet.create({

    btnContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 12,
        marginBottom: 5,

    },
    btnIcon: {
        height: 21,
        width: 21
    },
    btnText: {
        marginTop: 2
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
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
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
