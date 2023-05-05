import React,{useEffect} from 'react'
import { fetchData } from './Actions';

import {useSelector, useDispatch} from 'react-redux'; 


function Profile() {
  const loading = useSelector((state)=>state.data.loading);
  const data = useSelector((state)=>state.data.data);
  const error = useSelector((state)=>state.data.error);
  
  const dispatch =useDispatch();

 

  useEffect(() => {
   dispatch(fetchData())
  }, [dispatch])
  
  if (loading) {
    return <h1> Loading.....</h1>
  }
  if (error) {
    return <h1> Error </h1>
  }
  return (
    <div>
    <h1>Profile</h1>
          
        
          {
              
            data.map((products)=> <div key={products.id}  >
               
               <img  src = {products.thumbnail} alt={products.thumbnail} style={{ width:'280px',  height:"280px",margin:"0 auto"}}/>
               <p> Title : {products.title}  </p>
               <p>Price : {products.price}</p>
               
            </div>)
            
          }
          </div> 
       
      )
    }
    
    export default Profile




