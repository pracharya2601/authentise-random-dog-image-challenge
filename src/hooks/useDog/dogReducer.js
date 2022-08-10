import {types} from 'hooks/useDog/types';
import _ from 'lodash';

export const dogReducer = (state, action) => {
    switch(action.type){
        case types.SET_STATE: 
            return _.set({...state}, action.payload.key, action.payload.data)
            
        case types.UNSET_STATE: 
            let mutatinfData = {...state};
           _.unset(mutatinfData, action.payload);
            return mutatinfData;
        
        case types.FILL_STATE:
            let data = _.get({...state}, action.payload.key);
            //usually for errors data which is string
            if(!_.includes(data, action.payload.data)) {
                data.push(action.payload.data);
            }
            return _.set({...state}, action.payload.key, data);

        case types.DROP_STATE:
            let arrayData = _.get({...state}, action.payload.key); 
            arrayData.splice(action.payload.index, 1);
            return _.set({...state}, action.payload.key, arrayData);  
    
        default:
            return state;
    }

}