import { useReducer } from 'react'

function useAppState() {
  const initialState = {
    accountModalVisible: true,
    navOpen: false,
    displayRoute: 'food',
    counters: {},
    foodData: {
      water: 0,
      calories: 0,
      waterGoal: 2000,
      caloriesGoal: 2000,
      waterAdd: 0,
      caloriesAdd: 0
    }
  }
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
      default:
        throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}

export default useAppState

/////////////////////////////////////////////////////////////
// const useAppState = _ => {
//   const initialState = {
//     accountModalVisible: true,
//     navOpen: false,
//     displayRoute: 'food',
//     displayData: {
//       home: {},
//       food: {
//         waterGoal: 2000,
//         calorieGoal: 2000,
//         calorieTotal: 0,
//         waterTotal: 0
//       },
//       exercise: {},
//       record: {}
//     }
//   }
//   const [ appState, setAppState ] = useState(initialState)
//   const actions = getActions(setAppState)
//   return (
//     [ appState, actions ]
//   )
// }
// export default useAppState
//
// const getActions = setAppState => ({
//   hideAccountModal: _ => {
//     setAppState(state => ({...state, accountModalVisible: false}))
//   },
//   toggleNav: _ => {
//     setAppState(state => ({...state, navOpen: state.navOpen ? false : true}))
//   },
//   changeDisplayRoute: route => {
//     setAppState(state => ({...state, displayRoute: route}))
//   }
//   }
// })
