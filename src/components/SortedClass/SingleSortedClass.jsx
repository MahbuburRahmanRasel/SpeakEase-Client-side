import React from 'react';

const SingleSortedClass = ({item}) => {

    const {image, languageName,totalStudents} = item




    return (
        <div>
             <div className= "adhoster__card" >
                <div className=  "adhoster__circle"></div>
                
                    <img src={image} alt=""  className='w-full'/>
              
                <h1 className='text-3xl  '>Name of Class <br /> <span className='font-bold text-theme-3-400 '>{languageName} </span> </h1>
              
               
                <p>Total Students : {totalStudents}</p>

                
                
            </div>
        </div>
    );
};

export default SingleSortedClass;