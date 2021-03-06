import { useReducer, useEffect } from 'react'
import { TEST_DATA } from './testData'

function useAppState() {
  const initialState = {
    accountModalVisible: true,
    navOpen: false,
    displayRoute: 'exercise',
    foodData: {
      water: 0,
      calories: 0,
      waterGoal: 2000,
      caloriesGoal: 1500,
      waterAdd: 0,
      caloriesAdd: 0
    },
    exerciseData: {
      exercises: TEST_DATA.exercises,
      currentSet: null,
      currentExercise: null,
      currentWorkout: null,
      pastSets: null,
      pastExercises: null,
      pastWorkouts: null
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(_=>{
    console.log(state.exerciseData.currentExercise);
  },[state.exerciseData.currentExercise])
  function reducer (state, action) {
    switch (action.type) {
      case 'toggleNav':
        return {...state, navOpen: !state.navOpen}
      case 'displayRoute':
        return {...state, displayRoute: action.route}
      case 'toggleAccountModal':
        return {...state, accountModalVisible: !state.accountModalVisible}
      case 'changeWaterAdd':
        return {...state, foodData: {...state.foodData, waterAdd: action.count}}
      case 'addWaterAddToWater':
        return {...state, foodData: {
          ...state.foodData,
          waterAdd: 0,
          water: state.foodData.water + state.foodData.waterAdd
        }}
      case 'changeCaloriesAdd':
        return {...state, foodData: {...state.foodData, caloriesAdd: action.count}}
      case 'addCaloriesToAddCalories':
        return {...state, foodData: {
          ...state.foodData,
          caloriesAdd: 0,
          calories: state.foodData.calories + state.foodData.caloriesAdd
        }}
      case 'newWorkout':
        return {...state, exerciseData: {...state.exerciseData, currentWorkout: {}}}
      case 'selectNewExercise':
        return {...state, exerciseData: {...state.exerciseData, currentExercise: action.exercise }}
      default:
        throw new Error()
    }
  }
  return [state, dispatch]
}

export default useAppState
