import { useState } from "react";
import { NavLink } from "react-router-dom";

// react icons
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Navigasi = () => {
  const [menu, setMenu] = useState(false);

  const handeClick = () => {
    setMenu((menu) => !menu);
  };

  let menuActive = menu ? "hamburger-active" : "";
  let linkNav = menu ? "" : "hidden";
  return (
    <header className="w-full p-4 bg-white sticky top-0 z-10 lg:h-screen lg:pt-10 xl:pt-16 shadow-sm lg:shadow-none lg:w-60 xl:w-[330px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center lg:flex-col lg:gap-8">
          <img
            src="https://media.licdn.com/dms/image/D5603AQGnSxWHL1goxA/profile-displayphoto-shrink_100_100/0/1693581426597?e=1703116800&v=beta&t=YQo26-jDkh4VLlmNKpyMqUU-HO5YqoJYRPQ7ItI0D6k"
            alt=""
            className="w-8 h-8 block rounded-full me-4 lg:me-0 lg:mb-2 lg:w-24 lg:h-24"
          />
          <h1 className="font-medium">Syahridho Arjuna Syahputra</h1>
        </div>
        <div className="lg:hidden">
          <button className={`${menuActive} rounded p-2`} onClick={handeClick}>
            <span className="hamburger-line origin-top-right"></span>
            <span className="hamburger-line my-1.5"></span>
            <span className="hamburger-line origin-right"></span>
          </button>
        </div>
      </div>
      <hr className="my-6 hidden lg:block" />
      <div className={`mt-5 ${linkNav} h-[88vh] lg:block`}>
        <ul className="flex flex-col gap-2">
          <li>
            <NavLink
              className={
                "w-full font-medium py-2 block items-center gap-4 text-slate-800 text-center rounded transition duration-500 hover:bg-slate-800 hover:text-white lg:text-start lg:ps-2"
              }
              to={"/"}
              onClick={handeClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "w-full font-medium py-2  block text-slate-800 text-center rounded transition duration-500 hover:bg-slate-800 hover:text-white lg:text-start lg:ps-2"
              }
              to={"/projects"}
              onClick={handeClick}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "w-full font-medium py-2 block text-slate-800 text-center rounded transition duration-500 hover:bg-slate-800 hover:text-white lg:text-start lg:ps-2"
              }
              to={"/certificates"}
              onClick={handeClick}
            >
              Certificates
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "w-full font-medium py-2 block text-slate-800 text-center rounded transition duration-500 hover:bg-slate-800 hover:text-white lg:text-start lg:ps-2"
              }
              to={"/contact"}
              onClick={handeClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <hr className="my-6" />
        <h5 className="mb-4 text-center lg:text-start">Let`s Contact</h5>
        <ul className="flex justify-center gap-4">
          <li>
            <a
              href="mailto:syahridhosyahputra@gmail.com"
              target="blank"
              rel="noopener noreferrer"
              className="w-full text-neutral-800 block p-2 rounded-full border border-neutral-500 transition duration-500 hover:bg-slate-800 hover:text-white"
            >
              <AiOutlineMail />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Syahridho"
              target="blank"
              rel="noopener noreferrer"
              className="w-full text-neutral-800 block p-2 rounded-full border border-neutral-500 transition duration-500 hover:bg-slate-800 hover:text-white"
            >
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/syahridho"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-neutral-800 block p-2 rounded-full border border-neutral-500 transition duration-500 hover:bg-slate-800 hover:text-white"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
        <div className="mt-20 text-center">
          <h5>&copy; 2023 by sas</h5>
        </div>
      </div>
    </header>
  );
};

export default Navigasi;
