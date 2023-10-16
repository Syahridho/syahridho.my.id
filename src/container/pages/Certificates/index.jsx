import Navigasi from "../../../components/Navigasi";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import frondend from "./../../../assets/certificate/dicoding/d_frondend.webp";
import backend from "./../../../assets/certificate/dicoding/d_backend.webp";
import react from "./../../../assets/certificate/dicoding/d_react.webp";
import mtcna from "./../../../assets/certificate/mtcna/mtcna.webp";
import git from "./../../../assets/certificate/progate/p_git.webp";

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col lg:w-[1024px] xl:w-[1150px] lg:mx-auto lg:flex-row">
      <Navigasi />
      <div className="w-full h-[1000px] lg:mt-10">
        <div className="p-8">
          <h1 className="font-medium text-2xl text-slate-800 tracking-wide mt-4 mb-6">
            Certificate
          </h1>
          <div className="grid flex-col gap-4 sm:grid-cols-3">
            <div className="border border-slate-300">
              <img loading="lazy" src={frondend} alt="" />
            </div>
            <div className="border border-slate-300">
              <img loading="lazy" src={react} alt="" />
            </div>
            <div className="border border-slate-300 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <img loading="lazy" src={mtcna} alt="" />
            </div>
            <div className="border border-slate-300">
              <img loading="lazy" src={backend} alt="" />
            </div>
            <div className="border border-slate-300">
              <img loading="lazy" src={git} alt="" />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              className="py-2 px-6 border border-slate-800 shadow transition duration-800 hover:text-white hover:bg-slate-800"
              to={"/certificates/all"}
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
