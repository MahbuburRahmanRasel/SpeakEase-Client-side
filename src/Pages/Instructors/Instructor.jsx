import React from 'react';
import './instructor.css'

const Instructor = ({item}) => {

    const {languageName, instructorName, email, instructorImage}= item 


    return (
        <div>
             <div className=  "adhoster__card">
              
                    <img src={instructorImage} alt=""  className='w-full'/>
              
                <h1 className='text-3xl  '>Name of Class <br /> <span className='font-bold text-theme-3-400 '>{languageName} </span> </h1>
                <p className='text-xl'> Teacher <br /><span className='font-bold text-theme-3-400'>{instructorName}</span></p>
                <p className='text-lg'>Email: <br /> {email}</p>
              

                {/* <button className= {`btn my-btn-1 disabled:opacity-100 disabled:pointer-events-none`} disabled={availableSeats === 0}> Select Class</button>
                 */}
            </div>
        </div>
    );
};

export default Instructor;