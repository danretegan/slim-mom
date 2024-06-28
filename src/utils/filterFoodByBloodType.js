import products from '../constants/products.json';

export const filterFoodByBloodType = bloodType => {
  return products.filter(food => food.groupBloodNotAllowed[bloodType]);
};
