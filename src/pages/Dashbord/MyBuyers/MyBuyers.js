import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyBuyers = () => {


    const { user } = useContext(AuthContext)
    const [buyers, setBuyers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/mybuyers}`)
            .then(res => res.json())
            .then(data => setBuyers(data))
            .catch(error => console.log(error))
    }, [])
    // console.log(buyers);

    const myBuyers = buyers.filter((buyer) => buyer.seller_email === user?.email);




    return (
        <div>
            {/* { */}
                {/* // myBuyers.length === 0 ? <h4 className="text-2xl">Your product is not purchesed yet.</h4> : */}

        <h2 className="text-3xl">All Sellers</h2>
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Product</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>

         {
              buyers && buyers.map((buyer, index) => <tr key={buyer._id}>
                <th>{index + 1}</th>
                <td>{buyer.buyerName}</td>
                <td>{buyer.phoneName}</td>
                <td>{buyer.email}</td>
                <td>{buyer.phoneNumber}</td>
                <td>{buyer.location}</td>
            </tr>)
        }

        </tbody>
      </table>
    </div>

           
        </div>
        
    );
};

export default MyBuyers;