export const loginUser = () => {
      return {
            type: 'login',

      }
}

export const logOut = payload => {
      return {
            type: 'logout',
            payload
      }
}

