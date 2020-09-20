
export const Reducer = (state = {
    SearchArray: [],
    reduxHistory: [],
    pokemonData:{}
}, action) => {
    switch (action.type) {
        case "addHistory":
            state = {
                ...state,
                SearchArray: [...state.SearchArray, action.payload],
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            break;
        case "removeHistory":
            const removeindex = state.SearchArray.indexOf(action.payload)
            state.SearchArray.splice(removeindex, 1)

            console.log(state.SearchArray)
            state = {
                ...state,
                SearchArray: state.SearchArray,
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            break;
        case "addPokemonData":
            state = {
                ...state,
                pokemonData: state.pokemonData,
                reduxHistory: [...state.reduxHistory, action.payload]
            };
            break;
     
    }
    return state;
};
