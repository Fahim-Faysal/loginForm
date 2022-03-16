export const loginUser = payload => {
      return {
            type: 'login',
            payload
      }
}

export const logOut = payload => {
      return {
            type: 'logout',
            payload
      }
}

// export const addNumber = payload => {
//       return {
//             type: 'ADD',
//             payload
//       }
// }

// export const minusNumber = () => {
//       return {
//             type: 'MINUS'
//       }
// }

// export const userList = (payload) => {
//       return {
//             type: 'USER',
//             payload
//       }
// }

// export const submitForm = payload => {
//       return {
//             type: 'FORM',
//             payload
//       }
// }
