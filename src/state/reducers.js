import { ADD_TODO, DELETE_TODO, EDIT_TODO, DESIGN_LIST_SUCCESS, ADD_DESIGN } from './actiontypes'

const initialState = [
    {
        "id": 1, 
        "title": "Daily UI #001: Sign Up",
        "date": "2016-08-18",
        "pre": [
            "Oppgaven består i å lage et skjema for å opprette en ny bruker på et nettsted.",
            "Skjemaet bør være kort, og kun inneholde felter som er absolutt nødvendige. Velger å kun inkludere e-postadresse.",
            "Det bør komme tydelig frem hvorfor brukeren skal behøve å registrere seg.",
            "For å gjøre terskelen ekstra lav, bør brukere ha mulighet til å logge inn ved hjelp av sin Facebook- eller Google-konto."
        ],
        "post": [
            "Google- og Facebook-knappene er ikke tilpasset teksten, og er for brede.",
            "Google- og Facebook-knappene blir for dominerende.",
            "Epostadresse-input blir for usynlig og lite fremhevet, om dette er det viktigste elementet.",
            "Det benyttes bare grønnfarger, om det ses vekk fra Google-rød og Facebook-blå."
        ],
        "img": "/img/1-800x600.png",
        "thumb": "/img/1-400x300.png"
    },
    {
        "id": 2, 
        "title": "Daily UI #002: Credit Card Checkout", 
        "date": "2016-08-22",
        "pre": [
            "Brukeren skal taste inn kortnummer, gyldighetsdato og sikkerhetskode.",
            "Brukeren må vite hvilke typer kort som støttes, men det skal ikke være nødvendig å velge korttype. Dette tolkes automatisk.",
            "Skill tallgruppene i kortnummeret fra hverandre visuelt.",
            "Vis brukeren hva sikkerhetskode er.",
            "Handlekurv og totalsum bør vises."
        ],
        "post": [
            "Post"
        ],
        "img": "/img/2-800x600.png",
        "thumb": "/img/2-400x300.png"
    },
    {
        "id": 3, 
        "title": "Daily UI #003: Landing Page", 
        "date": "2016-01-01",
        "pre": [
            "Oppgaven går ut på å designe en landingsside som brukeren ankommer etter å ha registrert seg.",
            "Brukeren bør få informasjon om hva som har blitt gjort, og hva som er neste steg."

        ],
        "post": [
            "..."
        ],
        "img": "/img/3-800x600.png",
        "thumb": "/img/3-400x300.png"
    },
    {
        "id": 4, 
        "title": "Daily UI #004: Calculator", 
        "date": "2016-01-01",
        "pre": [
            "..."
        ],
        "post": [
            "..."
        ],
        "img": "/img/4-800x600.png",
        "thumb": "/img/4-400x300.png"
    },
    {
        "id": 5, 
        "title": "Daily UI #005: App Icon", 
        "date": "2016-01-01",
        "pre": [
            "..."
        ],
        "post": [
            "..."
        ],
        "img": "/img/5-800x600.png",
        "thumb": "/img/5-400x300.png"
    },
    {
        "id": 6, 
        "title": "Daily UI #006: User Profile", 
        "date": "2016-01-01",
        "pre": [
            "..."
        ],
        "post": [
            "..."
        ],
        "img": "/img/6-800x600.png",
        "thumb": "/img/6-400x300.png"
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




