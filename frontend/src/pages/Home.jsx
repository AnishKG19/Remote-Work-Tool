import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { handleSuccess, handleError } from '../components/utils';
const Home = () => {

    const [loggedInUser , setLoggedInUser] =useState('');
    const [products , setProducts] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    } , [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            console.log("11");
            const url = "http://localhost:3005/products";
            const options = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, options);
            console.log(response)
            if (!response.ok) {
                // Throws an error to be caught by the catch block
                throw new Error(`HTTP error! status: ${response.status}`);
                console.log("pp");
            }


            const result = await response.json();


            console.log(result);
            setProducts(result);
            console.log(products)
        } catch (err) {
            console.log("22");
            handleError(err);
        }
    }


    useEffect(()=>{
        fetchProducts() 
    } , []  )
    


  return (
    <div>
      <h1>Welcome {loggedInUser}</h1>


      <button onClick={handleLogout}  className='bg-red-400 p-2 w-'>Logout</button>

      <div>

        {
            products && products?.map((item,index)=> (
                <ul key={index} >
                    <span> {item.name} : {item.price} </span>
                </ul>
            ))
        }

      </div>



    </div>
  )
}

export default Home
