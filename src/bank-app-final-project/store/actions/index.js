import { ACTION_KEY } from "../../config";

export const postDeposit = (data) => ({
    payload: data,
    type: ACTION_KEY.POST_DEPOSIT,
    localStorageCall: true,
});
