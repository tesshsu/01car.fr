// Create Redux action types
import * as API from "../../api";
import * as LOADING_OVERLAY_ACTIONS from './loadingOverlay';

export const GET_CAR = 'GET_CAR'
export const GET_CAR_SUCCESS = 'GET_CAR_SUCCESS'
export const GET_CAR_FAILURE = 'GET_CAR_FAILURE'

export const GET_CARS = 'GET_CARS'
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE'


export const CREATE_CAR = 'CREATE_CAR';
export const CREATE_CAR_SUCCESS = 'CREATE_CAR_SUCCESS';
export const CREATE_CAR_FAILURE = 'CREATE_CAR_FAILURE';


export const ADD_CAR_PHOTO = 'ADD_CAR_PHOTO';
export const ADD_CAR_PHOTO_SUCCESS = 'ADD_CAR_PHOTO_SUCCESS';
export const ADD_CAR_PHOTO_FAILURE = 'ADD_CAR_PHOTO_SUCCESS';

export const DELETE_CAR_PHOTO = 'ADD_CAR_PHOTO';
export const DELETE_CAR_PHOTO_SUCCESS = 'ADD_CAR_PHOTO_SUCCESS';
export const DELETE_CAR_PHOTO_FAILURE = 'ADD_CAR_PHOTO_SUCCESS';

export const UPDATE_CAR = 'UPDATE_CAR'
export const UPDATE_CAR_SUCCESS = 'UPDATE_CAR_SUCCESS'
export const UPDATE_CAR_FAILURE = 'UPDATE_CAR_FAILURE'

export const EDIT_CAR = 'EDIT_CAR';

export const DELETE_CAR = 'DELETE_CAR'
export const DELETE_CAR_SUCCESS = 'DELETE_CAR_SUCCESS'
export const DELETE_CAR_FAILURE = 'DELETE_CAR_FAILURE'

// Create Redux action creators that return an action
export const getCar = () => ({
    type: GET_CAR,
});

export const getCarSuccess = (response) => ({
    type: GET_CAR_SUCCESS,
    payload: response,
});

export const getCarFailure = () => ({
    type: GET_CAR_FAILURE,
});


export const getCars = () => ({
    type: GET_CARS,
})

export const getCarsSuccess = (response) => ({
    type: GET_CARS_SUCCESS,
    payload: response,
})

export const getCarsFailure = () => ({
    type: GET_CARS_FAILURE,
})

export const createCar = () => ({
    type: CREATE_CAR,
})

export const createCarSuccess = (response) => ({
    type: CREATE_CAR_SUCCESS,
    payload: response,
})

export const createCarFailure = () => ({
    type: CREATE_CAR_FAILURE,
})

const addCarPhotoAction = () => ({
    type: ADD_CAR_PHOTO,
});

export const addCarPhotoFailure = () => ({
    type: ADD_CAR_PHOTO_FAILURE,
})

export const addCarPhotoSuccess = (response) => ({
    type: ADD_CAR_PHOTO_SUCCESS,
    payload: response,
});

const deleteCarPhotoAction = () => ({
    type: DELETE_CAR_PHOTO,
});

export const deleteCarPhotoFailure = () => ({
    type: DELETE_CAR_PHOTO_FAILURE,
})

export const deleteCarPhotoSuccess = (response) => ({
    type: DELETE_CAR_PHOTO_SUCCESS,
    payload: response,
})

const updateCar = () => ({
    type: UPDATE_CAR,
});

const updateCarSuccess = (response) => ({
    type: UPDATE_CAR_SUCCESS,
    payload: response,
})

const updateCarFailure = () => ({
    type: UPDATE_CAR_FAILURE,
});

const editingCar = (carId) => ({
    type: EDIT_CAR,
    payload: {
        editing: true,
        carId: carId
    }
});

export const deleteCarAction = () => ({
    type: DELETE_CAR,
});

export const deleteCarSuccess = (carId, response) => ({
    type: DELETE_CAR_SUCCESS,
    payload: {carId, response}
})

export const deleteCarFailure = (carId) => ({
    type: DELETE_CAR_FAILURE,
});


// Combine them all in an asynchronous thunk
export function fetchCars(page = 1, perPage = 18, owner = undefined) {
    return async (dispatch) => {
        dispatch(getCars())

        try {
            const response = await API.Annonces.search(perPage, page, owner);
            dispatch(getCarsSuccess(response));

        } catch (error) {
            dispatch(getCarsFailure())
        }
    }
}

export function fetchCar(id) {
    return async (dispatch) => {
        dispatch(getCar())

        try {
            const response = await API.Annonces.get(id);
            dispatch(getCarSuccess(response));

        } catch (error) {
            dispatch(getCarFailure())
        }
    }
}

export function create(payload) {
    return async (dispatch) => {
        try {
            const response = await API.Annonces.create(
                payload
            );
            dispatch(createCarSuccess(response));
        } catch (err) {
            await dispatch(createCarFailure());
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}

export function addPhoto(carId, payload) {
    return async (dispatch, getState) => {
        dispatch(addCarPhotoAction())
        try {
            const response = await API.Annonces.addPhoto(carId, payload);
            dispatch(addCarPhotoSuccess(response));
            return response;
        } catch (err) {
            await dispatch(addCarPhotoFailure());
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}

export function removePhoto(carId, payload) {
    return async (dispatch, getState) => {
        dispatch(deleteCarPhotoAction())
        try {
            const response = await API.Annonces.removePhoto(carId, payload);
            dispatch(deleteCarPhotoSuccess(response));
            return response;
        } catch (err) {
            await dispatch(deleteCarPhotoFailure());
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}

export function modifyCar(id, payload) {
    return async (dispatch, getState) => {
        dispatch(updateCar())
        try {
            const response = await API.Annonces.updateCar(id, payload);
            dispatch(updateCarSuccess(response));
        } catch (error) {
            dispatch(updateCarFailure())
        }
    }
}

export function editCar(carId) {
    return async (dispatch) => {
        dispatch(editingCar(carId));
    };
}

export function deleteCar(carId, payload) {
    return async (dispatch) => {
        try {
            const response = await API.Annonces.deleteCar(carId, payload);
            dispatch(deleteCarSuccess(carId, response));
        } catch (err) {
            await dispatch(deleteCarFailure(carId,));
            throw err;
        } finally {
            dispatch(LOADING_OVERLAY_ACTIONS.setVisibility(false));
        }
    };
}


