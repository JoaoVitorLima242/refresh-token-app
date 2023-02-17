import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import { Alert, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../api';
import { useContext, useState } from 'react';
import AuthContext from '../context/auth';

function Login() {
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState(null)
    const history = useHistory()
    const { setAuth } = useContext(AuthContext)

    const onSubmit = async (data) => {
        await api.post('/auth/login', data)
            .then(res => {
                localStorage.setItem('tokenRT', res.data.refreshToken)
                history.push('user')
                setAuth(res)
            })
            .catch(e => setError(e.response.data.error))
    }

    return (
      <div className='container'>
        <Form 
            className='card'
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1>Log In</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control {...register('username')} placeholder='username'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control {...register('password')} placeholder='password'/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {   error &&
                <Alert variant='danger' className='mt-4'>
                    {error}
                </Alert>
            }
            <div className='mt-4'>
                <Link to='/signup'>Go to Sign Up</Link>
            </div>
        </Form>
      </div>
    );
  }
  
  export default Login;
   