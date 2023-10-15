import Navigasi from "../../../components/Navigasi";
import gambar from "./../../../assets/projects/uiMusic.webp";
import { Link } from "react-router-dom";

const Certificates = () => {
  return (
    <div className="flex flex-col lg:w-[1024px] xl:w-[1150px] lg:mx-auto lg:flex-row">
      <Navigasi />
      <div className="w-full h-[1000px] lg:mt-10">
        <div className="p-8">
          <h1 className="font-medium text-2xl text-slate-800 tracking-wide mt-4 mb-6">
            Certificate
          </h1>
          <div className="grid flex-col gap-4 sm:grid-cols-2">
            <div>
              <img src={gambar} alt="" />
            </div>
            <div>
              <img src={gambar} alt="" />
            </div>
            <div>
              <img src={gambar} alt="" />
            </div>
            <div>
              <img src={gambar} alt="" />
            </div>
            <div>
              <img src={gambar} alt="" />
            </div>
            <div>
              <img src={gambar} alt="" />
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
