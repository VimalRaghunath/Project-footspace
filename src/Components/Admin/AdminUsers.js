import React, { useContext } from 'react'
import { myContext } from '../Context'
import Table from 'react-bootstrap/Table';
import Adminnavbar from './Adminnavbar';


function AdminUsers() {
    const { userData } = useContext(myContext)
  return (
     
    <>
      <Adminnavbar/>

      <h2 className='userslist'>USERS LIST</h2>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>s1 No</th>
          <th>Firstame</th>
          <th>Lastname</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((data,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data.Firstname}</td>
              <td>{data.Lastname}</td>
              <td>{data.Email}</td>
              <td>{data.Password}</td>
            </tr>
        ))}

      </tbody>
    </Table>
  </>  
  )
}

export default AdminUsers
