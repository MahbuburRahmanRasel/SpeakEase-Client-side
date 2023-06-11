import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import Swal from 'sweetalert2'
import useCart from '../../Hooks/useCarts';
import { Link } from 'react-router-dom';

const SingleSelected = ({item, index}) => {


    const [,refetch] = useCart()
    const handleDelete =()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }



    return (
        <tr>
        <th>{index +1}</th>
        <td>{item.languageName}</td>
        <td><AiTwotoneDelete size={24} className='text-theme-3-400 mx-auto cursor-pointer'  onClick={() => handleDelete(item)} /></td>
        <Link to="/dashboard/payment"><td className='bg-theme-1 text-center rounded-sm text-theme-3-100 cursor-pointer btn my-btn-1'>Payment</td></Link>
      </tr>
    );
};

export default SingleSelected;