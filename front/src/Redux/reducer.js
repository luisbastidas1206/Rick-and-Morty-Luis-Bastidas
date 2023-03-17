import { ADD_FAVORITES, DELETE_FAVORITES } from "./action_type";

const initialState={
    myFavorites:[],
    allCharacters:[]
}

export default function rooReducer(state=initialState,{type,payload}){
    switch (type) {
        case ADD_FAVORITES:
           return{ 
             ...state,
             myFavorites: [...state.allCharacters, payload],
             allCharacters: [...state.allCharacters, payload],

            
           }
        case DELETE_FAVORITES:
            const filtered=state.myFavorites.filter((id)=>{
                return id !== payload
            })
            return{
                ...state,
                myFavorites: payload
            }

    
        default:
            return {...state};
    }
}