import { ADD_TODO, DELETE_TODO, EDIT_TODO, DESIGN_LIST_SUCCESS, ADD_DESIGN } from './actiontypes'

const initialState = [
    {
        "id": 1, 
        "title": "Daily UI #001: Sign Up",
        "date": "2016-01-01",
        "pre": [
            "Oppgaven består i å lage et skjema for å opprette en ny bruker på et nettsted.",
            "Skjemaet bør være kort, og kun inneholde felter som er absolutt nødvendige. Velger å kun inkludere e-postadresse.",
            "Det bør komme tydelig frem hvorfor brukeren skal behøve å registrere seg.",
            "For å gjøre terskelen ekstra lav, bør brukere ha mulighet til å logge inn ved hjelp av sin Facebook- eller Google-konto."
        ],
        "post": [
            "Post"
        ],
        "img": "/img/1-800x600.png",
        "thumb": "/img/1-400x300.png"
    },
    {
        "id": 2, 
        "title": "Daily UI #002: Credit Card Checkout", 
        "date": "2016-01-01",
        "pre": [
            "Pre"
        ],
        "post": [
            "Post"
        ],
        "img": "https://d13yacurqjgara.cloudfront.net/users/995236/screenshots/2895043/bizhi00_1x.png",
        "thumb": "https://d13yacurqjgara.cloudfront.net/users/995236/screenshots/2895043/bizhi00_1x.png"
    },
    {
        "id": 3, 
        "title": "Daily UI #003: Landing Page", 
        "date": "2016-01-01",
        "pre": [
            "Pre"
        ],
        "post": [
            "Post"
        ],
        "img": "https://d13yacurqjgara.cloudfront.net/users/725862/screenshots/2895035/day024-acount_profile_1x.png",
        "thumb": "https://d13yacurqjgara.cloudfront.net/users/725862/screenshots/2895035/day024-acount_profile_1x.png"
    },
    {
        "id": 4, 
        "title": "Daily UI #004: Calculator", 
        "date": "2016-01-01",
        "pre": [
            "Pre"
        ],
        "post": [
            "Post"
        ],
        "img": "https://d13yacurqjgara.cloudfront.net/users/452635/screenshots/2894615/money_convertor_1x.png",
        "thumb": "https://d13yacurqjgara.cloudfront.net/users/452635/screenshots/2894615/money_convertor_1x.png"
    },
    {
        "id": 5, 
        "title": "Daily UI #005: App Icon", 
        "date": "2016-01-01",
        "pre": [
            "Pre"
        ],
        "post": [
            "Post"
        ],
        "img": "https://d13yacurqjgara.cloudfront.net/users/43342/screenshots/2895307/studiojq2016_nike_football_premierleague_ui2_1x.jpg",
        "thumb": "https://d13yacurqjgara.cloudfront.net/users/43342/screenshots/2895307/studiojq2016_nike_football_premierleague_ui2_1x.jpg"
    },
    {
        "id": 6, 
        "title": "Daily UI #006: User Profile", 
        "date": "2016-01-01",
        "pre": [
            "Pre"
        ],
        "post": [
            "Post"
        ],
        "img": "https://d13yacurqjgara.cloudfront.net/users/436276/screenshots/2894829/_11_ui_of_the_day_1x.png",
        "thumb": "https://d13yacurqjgara.cloudfront.net/users/436276/screenshots/2894829/_11_ui_of_the_day_1x.png"
    }
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




