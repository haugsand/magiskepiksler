import { combineReducers } from 'redux'
import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './actiontypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  },
  {
    text: 'Use Redux 2',
    completed: true,
    id: 1
  }
]

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }, 
        ...state
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          Object.assign({}, todo, { text: action.text }) :
          todo
      )

    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos
})

export default rootReducer




