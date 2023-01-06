// import { useQuery } from '@tanstack/react-query';
import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import './Dashbord.css';

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      console.log(data);
      return data;
    
    }
 
  });

  const [allUsers, setAllUsers] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/allusers`, {
  //     headers: {
  //       authorization: `bearer ${localStorage.getItem('accessToken')}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       // if (data.modifiedCount > 0) {
  //       //   toast.success('Make admin successful.')
  //       //   refetch();
  //       // }
  //       setAllUsers(data);
  //       console.log(data);
  //     })
  // }, [])


  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        // authorization: `bearer ${localStorage.getItem('accessToken')}`
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Make admin successful.')
          refetch();
        }
      })
  }


  const handelDelete = id =>{
    fetch(`http://localhost:5000/users/${id}`,{
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      if (data.deletedCount > 0){
        const remeningUsers = allUsers.filter((user) => user._id !== id)
        setAllUsers(remeningUsers);
        alert('delete sucessfull')
      } 
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      {/* <DashbordLayout></DashbordLayout> */}
      {/* <Dashbord></Dashbord> */}
   
        <h2 className="text-3xl">All Users</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                users && users.map((user, i) => <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary add_btn'>Make Admin</button>}</td>
                  <td><button className='btn btn-xs btn-danger add_btn' onClick={() => handelDelete(user._id)}>Delete</button></td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
    
    </div>
  );
};

export default AllUsers;