import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [user, setUser] = useState(null)

      // const username = useSelector(state => state.user.username)


      const handleSubmit = async e => {
            e.preventDefault();
            const user = { username, password };

            localStorage.setItem('user', JSON.stringify(user))
            const result = JSON.parse(localStorage.getItem('user'))
            setUser(result)


      }

      useEffect(() => {
            const loggedInUser = localStorage.getItem("user");
            if (loggedInUser) {
                  const foundUser = JSON.parse(loggedInUser);
                  setUser(foundUser);
            }
      }, []);

      const handleLogout = () => {
            setUser(null);
            setUsername("");
            setPassword("");
            localStorage.clear();
      }

      // if there's a user show the message below
      if (user) {

            return (
                  <div>
                        <div>{`${user?.username} is loggged in`}</div>
                        <button onClick={handleLogout}>logout</button>
                  </div>

            );
      }


      return (
            <div>
                  <h1>Please Login Here</h1>
                  <form onSubmit={handleSubmit}>
                        <TextField sx={{ m: 1, width: '45ch' }}
                              type='email'
                              value={username}
                              onChange={({ target }) => setUsername(target.value)}
                              label="Email" variant="outlined" />

                        <br />

                        <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                              <OutlinedInput
                                    type='password'
                                    value={password}
                                    onChange={({ target }) => setPassword(target.value)}
                                    endAdornment={
                                          <InputAdornment position="end">
                                                <IconButton
                                                      aria-label="toggle password visibility"
                                                >
                                                </IconButton>
                                          </InputAdornment>
                                    }
                                    label="Password"
                              />
                              <Button type='submit' sx={{ width: '58ch', backgroundColor: '#00008b', marginTop: '20px' }} variant="contained">Login</Button>
                        </FormControl>
                  </form>
            </div>
      );
};

export default Login;