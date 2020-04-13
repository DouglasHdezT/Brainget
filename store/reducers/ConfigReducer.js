import { SET_LOADING } from  '../actions/ConfigActions'

const  initState = {
	isLoading: false,
}

const configReducer = (state = initState, { type, payload }) => {
	switch(type){
		case SET_LOADING:
			return{
				...state,
				isLoading: payload.isLoading
			}
		default: 
			return state;
	}
}

export default configReducer;