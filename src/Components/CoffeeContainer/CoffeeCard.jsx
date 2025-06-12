import React from "react";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, supplier, taste, category, price, photoURL } = coffee;
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
          <button className="btn join-item">View</button>
          <button className="btn join-item">Edit</button>
          <button className="btn join-item">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
