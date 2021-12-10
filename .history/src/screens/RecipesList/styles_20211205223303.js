import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: {
    height: 120,
    width: '100%',
    borderRadius: 10,
  },
  title: RecipeCard.title,
  category: RecipeCard.category
});

export default styles;
