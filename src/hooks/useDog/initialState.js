//https://dog.ceo/api/breeds/image/random << 1 image
//https://dog.ceo/api/breeds/image/random/3 << 3 image
//`https://dog.ceo/api/`;
//max is 50
//^^^^^^^^^^^^^^^^^^^^^^^^^^random data 1 image

//https://dog.ceo/api/breed/{breedName}/images/random
//https://dog.ceo/api/breed/{breedName}/images/random/3<< 3 image
//by breed name

export const initialState = {
    breeds: [],
    dogImages: [],
    preferenceRequest: {
        breed: "",
        numberOfPicture: 1,
    },
    ui: {
        loading: {},
        errors: [],
    }
    
}