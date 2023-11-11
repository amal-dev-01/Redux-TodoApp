import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Forms from '../Forms'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
MDBTable,MDBTableHead,MDBTableBody  
} from 'mdb-react-ui-kit';


const Home = () => {
const {task}=useSelector((state)=>state.task)


const navigate=useNavigate()

const handleDetails=(e)=>{

    const id=e.target.id
    console.log(id);
    navigate(`/details/${id}`)

}
console.log(task);

  return (
    <MDBCard>
    <MDBCardBody>
      <MDBCardTitle>Redux Toolkit</MDBCardTitle>
      <MDBCardText>
<div className="App">
     <h1>Todo App</h1>
     <Forms/>
     <MDBTable>
  <MDBTableHead>
    <tr>
      <th scope='col'>Todo Item</th>
      <th scope='col'>Edit/Delete</th>
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    {task.map((todo) => (
      <tr key={todo.id}>
        <td>{todo.name}</td>
        <td>
          <MDBBtn id={todo.id} onClick={ handleDetails}>Details</MDBBtn>
        </td>
      </tr>
    ))}
  </MDBTableBody>
</MDBTable>


 </div>
 </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  )
}

export default Home