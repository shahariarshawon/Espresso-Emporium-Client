import React from 'react';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const {name, price, taste, chef, category, supplier, photoURL}=useLoaderData();
    
    return (
        <div>
             <div className="min-h-screen bg-[#f3f4f6] py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <Link
          to="/"
          className="inline-block text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded mb-6"
        >
          ← Back to Home
        </Link>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={photoURL}
            alt={name}
            className="w-full md:w-1/2 rounded-lg object-cover"
          />
          <div className="space-y-3 text-gray-800">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p><strong>Chef:</strong> {chef}</p>
            <p><strong>Supplier:</strong> {supplier}</p>
            <p><strong>Taste:</strong> {taste}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Price:</strong> ${price}</p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default CoffeeDetails;