import React, { useContext } from 'react';
import './SingleClass.css'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'

const SingleClass = ({item, index}) => {


    const {image, languageName, instructorName, availableSeats, price} = item

    const { user} = useContext(AuthContext);


    const handleToast = (id)=>{
        if(!user){
    
            Swal.fire({
                title: 'Error!',
                text: 'You have to Login first',
                icon: 'error',
                confirmButtonText: 'Okay',
                confirmButtonColor: '#469e92',

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
                <p className='text-lg'>Price: ${price}</p>
                <p>Available Seats : {availableSeats}</p>

                <button 
                className= {`btn my-btn-1 disabled:opacity-100 disabled:pointer-events-none`} 
                disabled={availableSeats === 0}
                
                onClick={()=>handleToast(index)}
                > Select Class</button>
                
            </div>
        </div>
    );
};

export default SingleClass;