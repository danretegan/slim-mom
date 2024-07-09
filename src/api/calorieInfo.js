// api/calorieInfo.js
import axiosInstance from './axios';

export const saveCalorieInfo = async calorieInfo => {
  try {
    const response = await axiosInstance.post(
      '/save-calorie-info',
      calorieInfo
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
