import React from 'react';
import useCart from '../../Hooks/useCarts';
import SingleSelected from './SingleSelected';

const Selectedclass = () => {

    const [cart,refetch] = useCart()

    return (
        <div className='w-2/3 mx-auto overflow-x-auto h-96 mt-16' >
           
           <p className=' text-xl text-center bg-theme-1 text-theme-3-100'>Your Selected Class:  {cart?.length}</p>
           <div className="overflow-x-auto">
  <table className="table table-pin-rows table-pin-cols">
    {/* head */}
    <thead className='text-center'>
      <tr className=' text-theme-dark text-lg'>
        <th>No.</th>
        <th>Name of class</th>
        <th>Delete</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody className='text-center'>
     
    {
        cart?.map((item,index) =>(
            <SingleSelected
            key={index}
            item={item}
            index= {index}
            />
        ))
    }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Selectedclass;