import { useForm } from 'react-hook-form'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUp() {
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
      <div className='container'>
        <Form 
            style={{
                maxWidth: '500px',
                margin: '30px auto',
                border: 'solid 1px #ccc',
                padding: '30px'
            }}
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
        </Form>
      </div>
    );
  }
  
  export default SignUp;
   