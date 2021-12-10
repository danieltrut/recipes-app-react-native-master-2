import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: {
    height: 60,
    width: '100%',
  },
  title: RecipeCard.title,
  category: RecipeCard.category
});

export default styles;
