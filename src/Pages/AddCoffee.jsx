import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee=(e)=>{
        //getting the form data
        e.preventDefault()
        const form=e.target;
        const formData=new FormData (form);
        const coffeeData=Object.fromEntries(formData.entries())
        console.log(coffeeData);
        //sending the data to the database
        fetch('http://localhost:3000/add-coffee',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(coffeeData)
        }

        )
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId)
            {
                 Swal.fire({
    toast: true,
    position: 'top-end', // top-right corner
    icon: 'success',
    title: `${coffeeData.name} added successfully!`,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
            }
        })

    }
  return (
     <div className="min-h-screen bg-[#f3f4f6] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <div className="mb-6">
          <Link
            className="inline-block text-white bg-[#6b7280] hover:bg-[#4b5563] px-5 py-2 rounded-md transition"
            to="/"
          >
            ← Back to Home
          </Link>
        </div>

        <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Add a Coffee
        </h2>
        <p className="text-center text-gray-500 mb-10">
          Fill the form to add a new coffee to the collection.
        </p>

        <form onSubmit={handleAddCoffee} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter coffee name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter chef's name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter supplier name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter taste description"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter category"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Price (USD)
              </label>
              <input
                type="number"
                name="price"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter price"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter image URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition text-lg font-medium"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
