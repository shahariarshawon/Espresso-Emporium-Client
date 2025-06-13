import React from "react";
import { Link, useLoaderData } from "react-router";
import CoffeeCard from "../Components/CoffeeContainer/CoffeeCard";

const HomePage = () => {
  const coffees = useLoaderData();
  return (
    <div className="w-3/4 mx-auto">
      <Link className="btn btn-primary m-10" to={'/add-coffee'}>Add Coffee Page</Link>
      
      <div className="grid grid-cols-2 gap-10">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
