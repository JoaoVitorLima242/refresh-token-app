import { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { api } from '../api';


function User() {
    const [user, setUser] = useState()

    useEffect(() => {
      const getUser = async () => {
        await api.get('/users/me')
          .then(res => {
              console.log(res, 'aqui')
              setUser(res.data)
          })
          .catch(e => {
            console.log(e)
          })
      }

      getUser()
    }, [])

    const logout = async () => {
      const refreshToken = localStorage.getItem('tokenRT')
      await api.post('/auth/logout', {
        refreshToken
      })
    }

    return (
      <div className='container'>
        <Card className='card'>
          {
            user &&
            <>
              <h1 className='mb-3'>User Info</h1>
              <p>ID: {user._id}</p>
              <p>Username: {user.username}</p>
              <p>Created At: {user.createdAt}</p>
            
            </>
          }

            <Button variant="primary" className='m-3 mb-0' onClick={logout}>
                Logout
            </Button>
        </Card>
      </div>
    );
  }
  
  export default User;
   