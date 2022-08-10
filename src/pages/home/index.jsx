import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ImagePreview from 'components/layouts/ImagePreview';
import DropDown from 'components/elements/DropDown';
import PreferenceForm from 'components/layouts/PreferenceForm';
import { types } from 'hooks/useDog/types';
import { useDog } from "hooks/useDog";

const Home = () => {
    const {state, dispatch, actions: {nextButtonHandeler}} = useDog();
    return (
        <Container>
            <PreferenceForm 
                selectBreed={
                    <DropDown 
                        selectHandeler={(selectedBreed) => dispatch({
                            type: types.SET_STATE,
                            payload: {
                                key: 'preferenceRequest.breed',
                                data: selectedBreed,
                            }
                        })}
                        buttonText={state.preferenceRequest.breed || "Select Breed"} 
                        menuItems={state.breeds}
                        loading={state.ui.loading['getbreeds']}
                    />
                }
                subtractNumHandeler={
                    <Button 
                        disabled={state.preferenceRequest.numberOfPicture > 1 ? false : true}
                        className='btn-info' 
                        onClick={() => dispatch({
                            type: types.SET_STATE,
                            payload: {
                                key: 'preferenceRequest.numberOfPicture',
                                data: state.preferenceRequest.numberOfPicture > 1 ? state.preferenceRequest.numberOfPicture - 1 : 1
                            }
                    })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </Button>
                }
                addNumHandeler={
                    <Button className='btn-info'
                        disabled={state.preferenceRequest.numberOfPicture < 50 ? false : true}
                        onClick={() => dispatch({
                            type: types.SET_STATE,
                            payload: {
                                key: 'preferenceRequest.numberOfPicture',
                                data: state.preferenceRequest.numberOfPicture < 50 ? state.preferenceRequest.numberOfPicture + 1 : 49
                            }
                        })}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                    </Button>
                }
                numOfImagesFrom={
                    <Form.Control
                        value={state.preferenceRequest.numberOfPicture}
                        disabled
                        className="text-center"
                    />
                }
                resetButton={
                    <Button 
                        type="button" 
                        className='w-100 btn-danger'
                        onClick={() => dispatch({
                            type: types.SET_STATE,
                            payload: {
                                key: 'preferenceRequest',
                                data: {
                                    breed: '',
                                    numberOfPicture: 1
                                }
                            }
                        })}
                    
                    >Reset Form</Button>
                }
            
            />
            {state.ui.loading['getdogimages'] ? (
                <Row>
                    {[...Array(state.preferenceRequest.numberOfPicture)].map((el, index) => <ImagePreview key={`loading-${index}`} loading/>)}
                    
                </Row>
            ) : (
            <Row>
                {state.dogImages?.map((data) => (
                    <ImagePreview key={`dog-images-${data}`} url={data}/>
                ))}
            </Row>
            )}

            <Button className='mt-5' onClick={() => nextButtonHandeler()}>
                Next Images
            </Button>
        </Container>
    )
}

export default Home;