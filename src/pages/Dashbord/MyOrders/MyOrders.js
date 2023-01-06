import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useOrders from '../../../hooks/useOrders';
// import AuthContext from '../../../contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
  const { userCoustom } = useContext(AuthContext)
  const [myOrders, setmyOrders] = useState([]);

// console.log(userCoustom);
  const handelMyOreder = () => {
    try {
      const token = localStorage.getItem('accessToken');
      fetch(`http://localhost:5000/singleuserOrder/${userCoustom?._id}`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => setmyOrders(data));
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handelMyOreder();
  }, [])

//   useEffect(() => {
//     fetch(`http://localhost:5000/orders?email=${userCoustom?.email}`, {
//         headers:{
//             authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//         }
//     })
//     .then(res => res.json())
//     .then(data => {
//         // setOrder(data);
//     });
// }, [userCoustom?.email])


  return (
    <>
      <h2 className="text-3xl">My Orders</h2>
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
            {/* {
                myOrders && myOrders.map((user, i) => <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
    
                </tr>)
              } */}

          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyOrders;