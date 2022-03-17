import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './login.css'

const Login = () => {
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [user, setUser] = useState(null)
      const [blog, setBlog] = useState([])
      console.log(blog);

      // const [allblog, setallBlog] = useState([])
      // console.log(allblog, allblog.length);


      const handleSubmit = async e => {
            e.preventDefault();
            const user = { username, password };

            localStorage.setItem('user', JSON.stringify(user))
            const result = JSON.parse(localStorage.getItem('user'))
            setUser(result)

      }

      const saveBlog = (e) => {
            e.preventDefault()

            localStorage.setItem('userblog', JSON.stringify(blog))

      }

      useEffect(() => {
            const loggedInUser = localStorage.getItem("user");
            const userBlog = localStorage.getItem('userblog');
            if (loggedInUser) {
                  const foundUser = JSON.parse(loggedInUser);
                  setUser(foundUser);
                  const previousBlog = JSON.parse(userBlog)
                  setBlog(previousBlog)
            }
      }, []);

      const handleLogout = () => {
            setUser(null);
            setUsername("");
            setPassword("");
            localStorage.removeItem('user');
      }

      // if there's a user show the message below
      if (user) {

            return (
                  <>
                        <div className='main-container'>
                              <div className='area'>
                                    <div style={{
                                          backgroundColor: 'lightblue', margin: '20px',
                                          fontSize: '15px', width: '80%', color: 'red', padding: '15px',
                                    }}>{`${user?.username} is loggged in`}</div>

                                    <h3>Write Your Blog</h3>

                                    <textarea onBlur={(e) => setBlog(prev => ([...prev, e.target.value]))} style={{ margin: '30px', width: '90%' }} name="" id="" cols="60" rows="10"></textarea>

                                    < button className='s-btn' onClick={saveBlog}>Submit</button>

                                    < button className='l-btn' onClick={handleLogout}>logout</button>
                                    <br />

                              </div >
                              <div>
                                    {
                                          blog.map((b, index) => {
                                                return (
                                                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <div style={{ margin: '10px', border: '1px solid green', gap: '10px', width: '70%' }}>
                                                                  <h5>{`Author : ${user?.username}`}</h5>
                                                                  <p key={index}>{b}</p>
                                                            </div>
                                                      </div>
                                                )
                                          })
                                    }
                              </div>
                        </div>

                  </>


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