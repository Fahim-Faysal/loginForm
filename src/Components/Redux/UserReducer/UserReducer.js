const initialstate = {
      username: "",
      password: "",
      user: null,
}

const userReducer = (state = initialstate, action) => {
      switch (action.type) {
            case 'login': {
                  action.e.preventDefault();
                  const user = { username: action.username, password: action.password };
                  localStorage.setItem('user', JSON.stringify(user))
                  const result = JSON.parse(localStorage.getItem('user'))
                  return {
                        ...state,
                        user: result
                  }
            }
            // case 'logout': {
            //       const handleLogout = () => {
            //             user(null)
            //             username("");
            //             password("");
            //             localStorage.clear();
            //       }
            // }
            default: {
                  return state
            }
      }
}
export default userReducer;