import { Button, Card } from 'react-bootstrap';


function User() {
    return (
      <div className='container'>
        <Card 
            style={{
                maxWidth: '500px',
                margin: '30px auto',
                border: 'solid 1px #ccc',
                padding: '30px'
            }}
        >
            <h1>User Info</h1>


            <Button variant="primary" className='m-5 mb-0'>
                Logout
            </Button>
        </Card>
      </div>
    );
  }
  
  export default User;
   