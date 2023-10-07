import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosChatboxes } from "react-icons/io";

const Contact = () => {
  return (
    <div className="relative">
      <div className="bg-blue-500 w-full justify-between flex items-center h-96">
        <div className="text-white space-y-4 max-w-screen-xl mx-auto">
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
      <div className="absolute inset-0 top-[450px] flex justify-center items-center">
      <div className="max-w-screen-xl mx-auto flex justify-center gap-5 text-center">
        <div className="flex flex-col justify-center items-center gap-5 p-16 border bg-white shadow-lg">
          <BsFillTelephoneFill className="text-5xl text-gray-800"></BsFillTelephoneFill>
          <h4 className="text-lg font-semibold">Talk to Sales</h4>
          <p>
            Interested in our services? Just pick up the phone to chat with a
            member of our sales team.
          </p>
          <p>+99665854786</p>
          <button className="text-blue-500 font-semibold">More Contact info...</button>
        </div>
        <div className=" flex flex-col justify-center items-center gap-5  p-16 border bg-white shadow-lg">
          <IoIosChatboxes className="text-5xl text-gray-800"></IoIosChatboxes>
          <h4 className="text-lg font-semibold">Contact Customer Support</h4>
          <p>
            Sometimes you need a little help from your friends. Or a Sportacular360
            support rep. Don’t worry… <br /> we’re here for you.
          </p>
          <button className="px-3 py-2 text-white bg-blue-500 font-semibold">
            Contact Support
          </button>
        </div>
      </div>
      </div>
    </div>
    // <div className="bg-white ">
    //   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    //     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
    //       Contact Us
    //     </h2>
    //     <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
    //       Got a technical issue? Want to send feedback about a beta feature?
    //       Need details about our Business plan? Let us know.
    //     </p>
    //     <form action="#" className="space-y-8">
    //       <div>
    //         <label className="block mb-2 text-sm font-medium text-gray-900 ">
    //           Your email
    //         </label>
    //         <input
    //           type="email"
    //           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
    //           placeholder="name@flowbite.com"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
    //           Subject
    //         </label>
    //         <input
    //           type="text"
    //           id="subject"
    //           className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
    //           placeholder="Let us know how we can help you"
    //           required
    //         />
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
    //           Your message
    //         </label>
    //         <textarea
    //           rows="6"
    //           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
    //           placeholder="Leave a comment..."
    //         ></textarea>
    //       </div>
    //       <button
    //         type="submit"
    //         className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
    //       >
    //         Send message
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Contact;
