import { ADD_TODO, DELETE_TODO, EDIT_TODO, DESIGN_LIST_SUCCESS, ADD_DESIGN } from './actiontypes'

const initialState = [
    {"id": 1, "title": "Snippet 1"},
    {"id": 2, "title": "Snippet 2"},
    {"id": 3, "title": "Snippet 3"},
    {"id": 4, "title": "Snippet 4"},
    {"id": 5, "title": "Snippet 5"},
    {"id": 6, "title": "Snaps"}
]

const reducer = function(state = initialState, action) {
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

    case DESIGN_LIST_SUCCESS:
      return state

    case ADD_DESIGN:
      return [
        ...state,
        action.design
      ]

    default:
      return state
  }
}


export default reducer




