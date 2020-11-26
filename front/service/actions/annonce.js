import * as API from "../../api";

export const GET_POST = 'GET POSTS'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPost = () => ({ type: GET_POST })
export const getPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  payload: post,
})
export const getPostFailure = () => ({ type: GET_POST_FAILURE })

export function fetchPost(id) {
  return async dispatch => {
    dispatch(getPost())

    try {
      const data = await API.Annonces.get(id);

      dispatch(getPostSuccess(data))
    } catch (error) {
      dispatch(getPostFailure())
    }
  }
}
