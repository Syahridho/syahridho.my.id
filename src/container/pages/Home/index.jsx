import Navigasi from "../../../components/Navigasi";
import university from "./../../../assets/home/unilak.png";

// react icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";

const Home = () => {
  return (
    <div className="flex flex-col lg:h-[1000px] lg:w-[1024px] xl:w-[1150px] lg:mx-auto lg:flex-row">
      <Navigasi />
      <div id="home" className="w-full overflow-auto lg:snap-none lg:pt-10">
        <div className="p-8">
          <div className="mb-8 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:mb-0">
            <h1 className="font-medium text-2xl tracking-wide text-slate-800 mb-4 lg:my-4">
              Hai i&apos;m Syahridho
            </h1>
            <div>
              <button className="border-2 border-slate-700 py-2 px-4 bg-slate-800 text-white transition duration-500 hover:bg-white hover:text-slate-800">
                Download CV
              </button>
            </div>
          </div>
          <div className="mb-6 flex gap-2">
            <div className="relative text-xs text-slate-700 rounded-full border border-slate-500 inline-block px-3 py-2 transiton duration-500 hover:bg-slate-700 hover:text-white">
              Web Developer
            </div>
            <div className="text-xs text-slate-700 rounded-full border border-slate-500 inline-block px-3 py-2 transiton duration-500 hover:bg-slate-700 hover:text-white">
              UI/UX
            </div>
            <div className="text-xs text-slate-700 rounded-full border border-slate-500 inline-block px-3 py-2 transiton duration-500 hover:bg-slate-700 hover:text-white">
              FreeLancer
            </div>
          </div>
          <p className="text-slate-600 text-base leading-7">
            I&apos;m a web developer with a focus on creating great online
            experiences. Here, you&apos;ll find a variety of projects covering
            different types of websites, from eye-catching looks to
            sophisticated functionality. I believe that every project is an
            opportunity to combine creativity with the latest technology.
          </p>
        </div>
        <div className="px-8 py-4">
          <h1 className="font-medium text-2xl tracking-wide text-slate-800 mb-3">
            Study
          </h1>
          <hr className="my-6" />
          <div>
            <div className="px-4 py-2 flex items-center gap-4 border-2 border-slate-300 rounded-md shadow transition duration-500 sm:w-1/2 hover:shadow-lg">
              <img
                src={university}
                alt="university Lancang Kuning"
                className="w-16 h-16"
              />
              <div className="text-sm text-slate-600">
                <a className="underline text-slate-800" href="">
                  Universitas Lancang Kuning
                </a>
                <h5>Informatics Engineering</h5>
                <p>Mei 2022 - Now</p>
                <p>~ 3rd semester</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <h1 className="font-medium text-2xl tracking-wide text-slate-800 mb-3">
            Skill
          </h1>
          <hr className="my-6" />
          <div className="flex justify-between sm:justify-center sm:gap-4">
            <FaHtml5 className="w-8 h-8 text-[#E34F26]" />
            <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />
            <FaJs className="w-8 h-8 text-[#F7DF1E]" />
            <FaReact className="w-8 h-8 text-[#61DAFB]" />
            <IoLogoFirebase className="w-8 h-8 text-[#FFCA28]" />
            <BiLogoTailwindCss className="w-8 h-8 text-[#38B2AC]" />
            <FaGitAlt className="w-8 h-8 text-[#F05032]" />
            <FaFigma className="w-8 h-8 text-[#F24E1E]" />
            <TbBrandVscode className="w-8 h-8 text-[#007ACC]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
