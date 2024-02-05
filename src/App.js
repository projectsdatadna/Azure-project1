import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button'; 

export default function App() { 
return ( 
	<div style={{ display: 'block', 
        
				width: 700, 
				padding: 30 }}> 
	<h4>Personal Information</h4> 
	<Form> 
	<Form.Group> 
		<Form.Control type="text"
						placeholder="Name" /><br></br>
		</Form.Group> 
		<Form.Group> 
		<Form.Control type="email"
						placeholder="Email" /> <br></br>
		</Form.Group> 
		<Form.Group> 
		<Form.Control type="number" placeholder="Age" /> <br></br>
		</Form.Group> 
		<Button variant="primary" type="submit"> 
		Click here to submit form 
		</Button> 
	</Form> 
	</div> 
); 
}
