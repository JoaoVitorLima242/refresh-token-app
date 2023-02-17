import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import { Alert, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../api';
import { useContext, useState } from 'react';
import AuthContext from '../context/auth';

function SignUp() {
    const {register, handleSubmit} = useForm()
    const history = useHistory()
    const [error, setError] = useState(null)
    const { setAuth } = useContext(AuthContext)

    const onSubmit = async (data) => {
        await api.post('/auth/signup', data)
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
            <h1>Sign Up</h1>
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
            <div className='mt-4'>
                <Link to='/login'>Go to Log In</Link>
            </div>
            {   error &&
                <Alert variant='danger' className='mt-4'>
                    {error}
                </Alert>
            }
        </Form>
      </div>
    );
  }
  
  export default SignUp;
   