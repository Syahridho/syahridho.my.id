const CardProject = ({ id, img, title, view }) => {
  return (
    <div
      className="p-4 bg-neutral-50 border border-slate-200 rounded-xl shadow-sm transition duration-500 hover:scale-95 hover:cursor-pointer"
      onClick={() => view(id)}
    >
      <img src={img} alt="" className="rounded h-auto" />
      <div className="px-2 pt-3 pb-2">
        <h1 className="text-xl font-base">{title}</h1>
        <div>
          {/* <ul className="flex">
            <li>
              <BiLogoTailwindCss className="w-6 h-6 text-[#38B2AC]" />
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default CardProject;
