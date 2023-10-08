import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MemberShip = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("membership.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = () => {
    return Swal.fire(
      "Good job",
      "Thank you for your interest in joining our community. We're excited to have you on board!",
      "success"
    );
  };
  return (
    <div className="max-w-screen-xl mx-auto p-5">
      <h1 className="text-center my-10 font-bold text-3xl md:text-5xl graduate uppercase">
        Choose Your Membership <br /> Elevate Your Sports Experience
      </h1>
      <div className=" grid  grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="p-5 flex flex-col items-center gap-4 rounded-lg shadow-lg"
            >
              <h1 className="text-2xl text-center font-semibold graduate uppercase">
                {category.category_name}
              </h1>
              <p className="text-center">
                <span className="text-4xl text-blue-400 font-bold">
                  ${category.monthly_fee}/
                </span>
                month
              </p>
              <ul className="space-y-2 flex-grow">
                {category.facilities.map((c, idx) => {
                  return (
                    <li key={idx}>
                      {idx + 1}. {c}
                    </li>
                  );
                })}
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xl px-3 py-2 font-semibold rounded-lg">
                Purchase
              </button>
            </div>
          );
        })}
      </div>
      <div className=" mx-auto shadow-lg px-20 py-10 mt-10 relative">
        <h1 className="text-center my-10 font-bold text-3xl md:text-5xl graduate uppercase">
          Join Our Community
        </h1>
        <div className="absolute -z-10 w-3/4 md:bottom-16 bottom-1/2">
          <img src="logo-full.png" className=" opacity-10 mx-auto" alt="" />
        </div>
        <div>
          <div className="flex flex-col md:flex-row items center gap-5">
            <div className="mb-5 w-full">
              <label className="block mb-2 font-medium">First name</label>
              <input
                type="text"
                className="border bg-transparent border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="First name"
                required
              />
            </div>
            <div className="mb-5 w-full">
              <label className="block mb-2 font-medium">Last name</label>
              <input
                type="text"
                className="bg-transparent border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items center gap-5">
            <div className="mb-5 w-full">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="bg-transparent border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="youremail@example.com"
                required
              />
            </div>
            <div className="mb-5 w-full">
              <label className="block mb-2 font-medium">Phone</label>
              <input
                type="text"
                className="bg-transparent border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="your phone number"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items center gap-5">
            <div className="mb-5 w-full">
              <label className="block mb-2 font-medium">Country</label>
              <input
                type="text"
                className="bg-transparent border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="your country name"
                required
              />
            </div>
            <div className="mb-5 w-full">
              <label className="block mb-2 font-medium">City</label>
              <input
                type="text"
                className="bg-transparent border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="the city you lived in"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items center gap-5">
            <div className="mb-5 w-full">
              <label className="block mb-2 font-medium">Area</label>
              <input
                type="text"
                className="bg-transparent border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="the area you lived in"
                required
              />
            </div>
            <div className="mb-5 w-full">
              <label className="block mb-2 font-medium">ZIP Code</label>
              <input
                type="text"
                className="bg-transparent border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="zip code of your area"
              />
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="  focus:ring-4 focus:outline-none  font-medium rounded-lg text-lg text-white px-5 py-2.5  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
