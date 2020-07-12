export const chgR2Array = (data) => {
    return {
        type: 'R2-ADD',
        payload: data
    }
}

export const chgR2Pop = () => ({ type: 'R2-POP' });