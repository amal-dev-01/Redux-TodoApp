import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './features/formSlice'
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBBtn
  } from 'mdb-react-ui-kit';

const Forms = () => {
    const [name, setName] = useState("")

    const dispatch=useDispatch()
    const onSubmit = (event) => {
		event.preventDefault();
        console.log(event.target.value);

		if(name.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setName("");
			return;
		}

		dispatch(
			addTask({
				task: name
			})
		);

		setName("");
	};

    return (
		
        <div>
			 <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Add To Todo</MDBCardTitle>
            <div>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
                <MDBBtn className="task-button" onClick={onSubmit}>
				Save
			</MDBBtn>
            </div>
      </MDBCardBody>
    </MDBCard>


        </div>
    )
}

export default Forms
