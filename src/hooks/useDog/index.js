import { useEffect, useReducer } from "react"
import { dogReducer } from "hooks/useDog/dogReducer"
import { initialState } from "hooks/useDog/initialState"
import { getBreed } from "hooks/useDog/actions";

import { fetchData } from "hooks/useDog/actions";
import { types } from "hooks/useDog/types";

export const useDog = () => {
    const [state, dispatch] = useReducer(dogReducer, initialState);

    // initial data rendering list of breeds for dropdown
    useEffect(() => {
        getBreed(dispatch);
        return () => dispatch({
            type: types.UPDATE_STATE,
            key: 'breeds',
            payload: []
        })
    }, [])

    //initial render and listern for breed and numberOfPicture change
    let {breed, numberOfPicture} = state.preferenceRequest;
    useEffect(() => {
        fetchData(dispatch, {breed, numberOfPicture})
        return () => dispatch({
            type: types.UPDATE_STATE,
            key: 'breeds',
            data: [],
        })
    }, [ breed, numberOfPicture ])

    //next button handeler
    // simple approach
    const nextButtonHandeler = async () => {
        await fetchData(dispatch, {breed, numberOfPicture});
    }
    return {state, dispatch, actions: {
        nextButtonHandeler
    }}
}