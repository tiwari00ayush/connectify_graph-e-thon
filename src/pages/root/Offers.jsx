import React from "react";

const Offers = () => {
  const data = [
    {
      name: "Cafe Coffee Day",
      cuisine: "Cafe, Coffee",
      address: "Pacific Mall, Dehradun",
      rating: 4.5,
      openingHours: "8:00 AM - 10:00 PM",
      contact: "+91 9876543210",
      offers: "Buy 1 Get 1 Free on all coffees",
    },
    {
      name: "Domino's Pizza",
      cuisine: "Pizza, Fast Food",
      address: "Rajpur Road, Dehradun",
      rating: 4.2,
      openingHours: "10:00 AM - 11:00 PM",
      contact: "+91 9876543211",
      offers: "50% off on Medium Pizzas",
    },
    {
      name: "Barbeque Nation",
      cuisine: "Barbecue, Buffet",
      address: "Astley Hall, Dehradun",
      rating: 4.7,
      openingHours: "12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM",
      contact: "+91 9876543212",
      offers: "Lunch Buffet at Rs. 499",
    },
    {
      name: "KFC",
      cuisine: "Fast Food, Fried Chicken",
      address: "Rajpur Road, Dehradun",
      rating: 4.3,
      openingHours: "11:00 AM - 10:00 PM",
      contact: "+91 9876543213",
      offers: "Family Bucket at Rs. 599",
    },
    {
      name: "Subway",
      cuisine: "Sandwiches, Fast Food",
      address: "Astley Hall, Dehradun",
      rating: 4.0,
      openingHours: "10:00 AM - 10:00 PM",
      contact: "+91 9876543214",
      offers: "Buy 2 Footlongs, Get 1 Free",
    },
    {
      name: "McDonald's",
      cuisine: "Fast Food, Burgers",
      address: "Pacific Mall, Dehradun",
      rating: 4.1,
      openingHours: "9:00 AM - 11:00 PM",
      contact: "+91 9876543215",
      offers: "Free Fries on all orders above Rs. 200",
    },
    {
      name: "Pizza Hut",
      cuisine: "Pizza, Italian",
      address: "Pacific Mall, Dehradun",
      rating: 4.4,
      openingHours: "11:00 AM - 11:00 PM",
      contact: "+91 9876543216",
      offers: "20% off on Pan Pizzas",
    },
    {
      name: "Burger King",
      cuisine: "Fast Food, Burgers",
      address: "Rajpur Road, Dehradun",
      rating: 4.2,
      openingHours: "10:30 AM - 10:00 PM",
      contact: "+91 9876543217",
      offers: "Whopper Meal at Rs. 99",
    },
    {
      name: "Giani's Ice Cream",
      cuisine: "Desserts, Ice Cream",
      address: "Rajpur Road, Dehradun",
      rating: 4.6,
      openingHours: "12:00 PM - 11:00 PM",
      contact: "+91 9876543218",
      offers: "Buy 1 Scoop, Get 1 Free",
    },
  ];

  return (
    <div className="px-2 py-10">
      <h1 className="text-center capitalize text-[1.8rem] text-white">
        connecting you to more than just people <br /> Exciting{" "}
        <span className="text-primary-btn">offers</span> await !
      </h1>
      <div className="flex items-stretch flex-wrap gap-5 py-10 justify-center">
        {data.map((cafe, index) => (
          <div className="relative w-[300px] bg-white px-2 py-2 rounded-xl">
            <p>Name : {cafe.name}</p>
            <p>Cuisine : {cafe.cuisine}</p>
            <p>Address : {cafe.address}</p>
            <p>Rating : {cafe.rating}</p>
            <p>OpeningHours : {cafe.openingHours}</p>
            <p>Contact : {cafe.contact}</p>
            <p>Offers : {cafe.offers}</p>
            <div className="absolute w-full h-full transparent hover:bg-input top-0 left-0 flex justify-center items-center">
              <button className="px-2 py-2 border-2 hover:bg-purple-light text-white">
                Get Offer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
