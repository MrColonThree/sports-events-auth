import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";

const Contact = () => {
  return (
    <div className="relative">
      <div className="bg-blue-500 w-full justify-between flex flex-col-reverse md:flex-row md:h-96 gap-5 mb-20">
        <div className="text-white space-y-4 max-w-screen-xl mx-auto p-5 my-10">
          <h1 className="text-5xl font-bold">Get in touch</h1>
          <p>
            Want to get in touch? We'd love to hear from you. Here's how <br />{" "}
            you can reach us...
          </p>
        </div>
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1555421689-3f034debb7a6"
          alt=""
        />
      </div>
      <div className="lg:absolute inset-0 top-[450px] flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center gap-5 text-center px-5">
          <div className="flex flex-col justify-center items-center gap-5 p-16 border bg-white shadow-lg">
            <BsFillTelephoneFill className="text-5xl text-gray-800"></BsFillTelephoneFill>
            <h4 className="text-lg font-semibold">Talk to Sales</h4>
            <p>
              Interested in our services? Just pick up the phone to chat with a
              member of our sales team.
            </p>
            <p>+9966 854 786</p>
            <button className="text-blue-500 font-semibold">
              More Contact info...
            </button>
          </div>
          <div className=" flex flex-col justify-center items-center gap-5  p-16 border bg-white shadow-lg">
            <IoIosChatboxes className="text-5xl text-gray-800"></IoIosChatboxes>
            <h4 className="text-lg font-semibold">Contact Customer Support</h4>
            <p>
              Sometimes you need a little help from your friends. Or a
              Sportacular360 support rep. Don’t worry… <br /> we’re here for
              you.
            </p>
            <button className="px-3 py-2 text-white bg-blue-500 hover:bg-blue-700 font-semibold rounded-lg">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
