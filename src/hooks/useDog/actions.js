import axios from 'axios';
import {types} from 'hooks/useDog/types';


export const fetchData = async (dispatchEvent, {numberOfPicture, breeds}) => {
    dispatchEvent({type: types.SET_STATE, payload: {
        key: 'ui.loading.getdogimages',
        data: true,
    }})
    try {
        let dynamicApiString = `/breeds${breeds ? "/" + breeds: ''}/image/random/${numberOfPicture}`
        let result = await axios.get(dynamicApiString);
        dispatchEvent({
            type: types.SET_STATE,
            payload: {
                key:'dogImages',
                data: result.data.message,
            }
        })
    } catch(error) {
        dispatchEvent({type: types.FILL_STATE, payload: {
            key: 'ui.errors',
            data: 'Error fetching dog Images'
        }})

    }
    dispatchEvent({type: types.UNSET_STATE, payload: 'ui.loading.getdogimages'})
    
}

export const getBreed = async (dispatchCallBack) => {
    dispatchCallBack({type: types.SET_STATE, payload: {
        key: 'ui.loading.getbreeds',
        data: true,
    }})
    try {
        const response = await axios.get(`/breeds/list`)
        dispatchCallBack({
            type: types.SET_STATE,
            payload: {
                key: 'breeds',
                data: response?.data?.message
            }
        })
        
    } catch(error) {
        dispatchCallBack({type: types.FILL_STATE, payload: {
            key: 'ui.errors',
            data: 'Error fetching breeds'
        }})
    }
    dispatchCallBack({type: types.UNSET_STATE, payload: 'ui.loading.getbreeds'})
}
