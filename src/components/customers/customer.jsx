import './customer.css';
import React, { useState, useEffect } from 'react';

function Customers() {
  let [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('/api/customers')
        .then(res => res.json())
        .then(data => setCustomers((data), console.log('Customers fetched...', data)
        ));
  },[]);

  return (
    <>
        <div className='customers'>
            <h2>Customers</h2>
            <ul>
                {customers.map((customer) => 
                    <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                )}
            </ul>
        </div>
    </>
  )
}

export default Customers