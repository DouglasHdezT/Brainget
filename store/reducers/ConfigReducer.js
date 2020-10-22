/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { SET_LOADING, SET_LANGUAGE } from  '../actions/ConfigActions';
import { ES_VALUE, LANG_KEY } from '../../assets/constants/KeyValues';
import { AsyncStorage } from 'react-native';

const  initState = {
	isLoading: false,
	lang: ES_VALUE
}

const configReducer = (state = initState, { type, payload }) => {
	switch(type){
		case SET_LOADING:
			return{
				...state,
				isLoading: payload.isLoading
			}
		case SET_LANGUAGE:
			AsyncStorage.setItem(LANG_KEY, payload.lang);
			return{
				...state,
				lang: payload.lang
			}
		default: 
			return state;
	}
}

export default configReducer;