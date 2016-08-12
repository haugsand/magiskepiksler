import { ADD_TODO, DELETE_TODO, EDIT_TODO, DESIGN_LIST_SUCCESS, ADD_DESIGN } from './actiontypes'

const initialState = [
    {"id": 1, "title": "Snippet 1", "img": "https://d13yacurqjgara.cloudfront.net/users/13774/screenshots/2894892/nomanssky_1x.png"},
    {"id": 2, "title": "Snippet 2", "img": "https://d13yacurqjgara.cloudfront.net/users/995236/screenshots/2895043/bizhi00_1x.png"},
    {"id": 3, "title": "Snippet 3", "img": "https://d13yacurqjgara.cloudfront.net/users/725862/screenshots/2895035/day024-acount_profile_1x.png"},
    {"id": 4, "title": "Snippet 4", "img": "https://d13yacurqjgara.cloudfront.net/users/452635/screenshots/2894615/money_convertor_1x.png"},
    {"id": 5, "title": "Snippet 5", "img": "https://d13yacurqjgara.cloudfront.net/users/43342/screenshots/2895307/studiojq2016_nike_football_premierleague_ui2_1x.jpg"},
    {"id": 6, "title": "Snaps", "img": "https://d13yacurqjgara.cloudfront.net/users/436276/screenshots/2894829/_11_ui_of_the_day_1x.png"}
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




