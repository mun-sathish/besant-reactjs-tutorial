// inspired by https://leanpub.com/redux-book
import axios from "axios";
import { accessDenied, apiError, apiStart } from "../actions/api";
import { API } from "../actions/types";

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
    next(action);

    if (action.type !== API) return;

    const { url, method, onSuccess, onFailure, label } = action.payload;

    if (label) {
        dispatch(apiStart(label));
    }

    axios
        .request({
            url,
            method,
        })
        .then(({ data }) => {
            dispatch(onSuccess(data));
        })
        .catch((error) => {
            dispatch(apiError(error));
            dispatch(onFailure(error));

            if (error.response && error.response.status === 403) {
                dispatch(accessDenied(window.location.pathname));
            }
        });

    // .finally(() => {
    //   if (label) {
    //     dispatch(apiEnd(label));
    //   }
    // });
};

export default apiMiddleware;
