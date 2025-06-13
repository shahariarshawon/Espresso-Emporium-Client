import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  //usestate for instant data loading after deletion
  const { _id, name, chef, supplier, taste, category, price, photoURL } =
    coffee;
  //deleting coffee functionalities
  const handleDeleteCoffee = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //deleting method
        fetch(`http://localhost:3000/add-coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
          });

        const remainingCoffee = coffees.filter((cof) => cof._id !== _id);
        setCoffees(remainingCoffee);
        //delete confirming sweetalert
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        console.log(_id, "has been deleted");
      }
    });
  };
  return (
    <div>
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition w-full p-10 flex justify-between items-center">
        <img src={photoURL} alt={name} className="w-40 h-40 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-semibold">Chef:</span> {chef}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-semibold">Supplier:</span> {supplier}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-semibold">Taste:</span> {taste}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-semibold">Category:</span> {category}
          </p>
          <p className="text-md text-indigo-600 font-bold mt-3">${price}</p>
        </div>
        <div className="join join-vertical space-y-5">
          <Link to={`/coffee-details/${coffee._id}`} className="btn join-item">
            View
          </Link>
          <Link to={`/update-coffee/${_id}`} className="btn join-item">
            Edit
          </Link>
          <Link
            onClick={() => handleDeleteCoffee(_id)}
            className="btn join-item"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
