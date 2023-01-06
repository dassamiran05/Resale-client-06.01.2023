import React, { useEffect, useState } from 'react';

const AllBuyers = () => {

    const [allBuyers, setAllBuyers] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/users/buyers`, {
        // headers: {
        //   authorization: `bearer ${localStorage.getItem('accessToken')}`
        // }
      })
        .then(res => res.json())
        .then(data => setAllBuyers(data))
        .catch(error => console.log(error))
        
    }, [])

    console.log(allBuyers);

    return (
        <div>
       <h2 className="text-3xl">All Buyers</h2>
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

              {/* <p></p> */}
              {
                allBuyers && allBuyers.map((user, i) => <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{<button className='btn btn-xs btn-primary add_btn'>Make Admin</button>}</td>
                  <td><button className='btn btn-xs btn-danger add_btn'>Delete</button></td>
                </tr>)
              } 

            </tbody>
          </table>
        </div>
        </div>
    );
};

export default AllBuyers;