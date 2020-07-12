export const chgR1Type = (data) => {
    return {
        type: 'R1-CHANGE-TYPE',
        payload: data
    }
}

export const chgR1EnableData = () => ({ type: 'R1-ENABLE-DATA' });

export const chgR1DisableData = () => ({ type: 'R1-DISABLE-DATA' })