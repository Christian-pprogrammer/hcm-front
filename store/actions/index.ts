export const setAuthUser = (user: Object) => {
    return {
        type: 'SET_AUTH_USER',
        payload: user,
    }
}
