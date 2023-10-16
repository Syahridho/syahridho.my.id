import Navigasi from "../../../components/Navigasi";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col lg:w-[1024px] xl:w-[1150px] lg:mx-auto lg:flex-row">
      <Navigasi />
      <div className="w-full h-[1000px] lg:mt-10">
        <div className="p-8">
          <h1 className="font-medium text-2xl text-slate-800 tracking-wide mt-4 mb-6">
            Contact Me
          </h1>
          <form className="flex flex-col mt-12 px-32" action="">
            <label htmlFor="name">Name</label>
            <input
              className="border border-slate-500 mb-6 rounded p-2"
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
            />
            <label htmlFor="email">Email</label>
            <input
              className="border border-slate-500 mb-6 rounded p-2"
              type="email"
              name="email"
              id="name"
              placeholder="Your email"
            />
            <label htmlFor="request">Request</label>
            <textarea
              className="border border-slate-500 mb-6 rounded p-2"
              name="request"
              id="request"
              cols="20"
              rows="5"
              placeholder="Your request"
            ></textarea>
            <button className="text-white bg-slate-800 py-2 rounded shadow">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
