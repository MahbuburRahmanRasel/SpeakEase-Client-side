import React, { useContext } from 'react';
import './SingleClass.css'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCarts';
import useUsers from '../../Hooks/useUsers';

const SingleClass = ({item, index}) => {


    const {image, languageName, instructorName, availableSeats, price, _id} = item

    const { user} = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const [, ,requireUser ] = useUsers()

    console.log(requireUser)

   

    const handleToast = (item)=>{

          if(user && user?.email){
            const cartItem = {ItemId: _id,  image, price, languageName, instructorName, email: user.email}
            fetch('http://localhost:5000/carts',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    refetch()
                    Swal.fire('Successfully selected')
                }
            })
          }
          else{
            Swal.fire({
                title: 'Error!',
                text: 'You have to Login first',
                icon: 'error',
                confirmButtonText: 'Okay',
                confirmButtonColor: '#469e92',
              })
              .then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
          }

          
        }

    return (
        <div>
             <div className={` ${availableSeats ===0 ? "disableBg" : "adhoster__card"}`} >
                <div className= {` ${availableSeats ===0 ? "disableCard" : "adhoster__circle"}`}></div>
                
                    <img src={image} alt=""  className='w-full'/>
              
                <h1 className='text-3xl  '>Name of Class <br /> <span className='font-bold text-theme-3-400 '>{languageName} </span> </h1>
                <p className='text-xl'> Teacher <br /><span className='font-bold text-theme-3-400'>{instructorName}</span></p>
                <p className='text-lg dark:text-theme-light'>Price: ${price}</p>
                <p>Available Seats : {availableSeats}</p>

                <button 
                className= {`btn my-btn-1  ${availableSeats === 0   ? "opacity-50 pointer-events-none":""}`} 
                
               
                
                onClick={()=>handleToast(item)}
                > Select Class</button>
                
            </div>
        </div>
    );
};

export default SingleClass;