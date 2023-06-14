import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const [formdata , setFormdata] = useState({})


  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const instructorName = form.instructorName.value;
    const email = form.email.value;
    const instructorImage = form.instructorImage.value;
    const languageName = form.languagename.value;
    const image = form.image.value;
    const availableSeats = parseInt(form.availableSeats.value);
    const price = parseInt(form.price.value);
    const totalStudents = parseInt(form.totalStudents.value);

    const updatedclass = {
        image,
        languageName,
        instructorName,
        email,
        availableSeats,
        price,
        totalStudents,
        status: "pending"

    };

    const updatedTeacher = {
        languageName,
        instructorName,
        email,
        instructorImage
        
    }
    console.log(updatedclass, updatedTeacher);


    fetch(
      `https://b7a12-summer-camp-server-side-mahbubur-rahman-rasel.vercel.app/allclasses`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedclass),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Post a Class  Successfully",
            icon: "success",
            confirmButtonText: "Okay",
            confirmButtonColor: "#DB915E",
          });
        }
      });


    setFormdata({
        availableSeats:"",
        languagename:"",
        image:"",
        price: "",

        
        
    })
  };


  return (
    <div>
      <div className="">
        <div>
          <form className=" flex flex-col justify-center " onSubmit={handleUpdate}>
            <div className=" border w-2/3 p-5 rounded-md border-theme-1 mx-auto overflow-y-auto h-96">
              <div>
                <div className="">
                  <label className=" ">
                    <span className=" text-theme-1 font-bold">Instructor Name</span>
                  </label>
                  <input
                    type="text"
                    className="input  input-bordered input-success"
                    name="instructorName"
                    defaultValue={user?.displayName}
                  />
                </div>
                <div className="form-control m-0">
                  <label className="label">
                    <span className="text-theme-1 font-bold">Instructor Email</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    name="email"
                    defaultValue={user?.email}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-theme-1 font-bold">Instructor Image</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    name="instructorImage"
                    defaultValue={user?.photoURL}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-theme-1 font-bold">Name of Class</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    name="languagename"
                    value={formdata.languagename}
                  />
                </div>
              </div>
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-theme-1 font-bold">Class Image Url</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    name="image"
                    value={formdata.image}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-theme-1 font-bold">Available Seats</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    name="availableSeats"
                    value={formdata.availableSeats}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-theme-1 font-bold">Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    name="price"
                    value={formdata.price}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-theme-1 font-bold">Total Students</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    name="totalStudents"
                    defaultValue={0}
                  />
                </div>
              </div>
            </div>
          
              <div className="form-control   text-center mx-auto">
                <input
                  type="submit"
                  value="Update Class"
                  className="btn my-btn-1"
                />
             
            </div>
          </form>
       
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AddClass;
