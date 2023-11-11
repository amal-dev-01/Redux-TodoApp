import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTask ,editTask} from "../features/formSlice"
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';


const Details = () => {
  const navigate = useNavigate()
  const { task } = useSelector((state) => state.task);
  const { id } = useParams();
  const pid = id;
  console.log(task,'task');
  console.log(pid,'id');
  const dispatch = useDispatch();

  const [editedTask, setEditedTask] = useState([]);

  const removeTask = (id) => {
    dispatch(deleteTask({ id: id }));
    navigate('/')
    
  };
  const handleEdit = (id) => {
    dispatch(editTask({ id: id, newName: editedTask }));
    navigate('/')
    setEditedTask('');
  };
  const selectedProduct = task.filter((item) => item.id == pid);

  console.log(selectedProduct,'selectedProduct');

  return (
    <div>
      <MDBCard>
      <MDBCardBody>
    {selectedProduct.map((item) => (
      <div key={item.id}>
        <p><b>Title </b>: {item.name}</p>
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        /><br/><br/>
    
        <MDBBtn onClick={() => handleEdit(item.id)}>Edit</MDBBtn> <span style={{ margin: '0 5px' }}></span>
        <MDBBtn  color='danger' onClick={() => removeTask(item.id)}>Delete</MDBBtn>
      </div>
    ))}
      </MDBCardBody>
    </MDBCard>
  </div>
  );
};

export default Details;
