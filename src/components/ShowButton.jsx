const ShowButton = ({ title, link }) => {
  return (
    <a
      className="border-2 border-slate-800 px-4 py-3 rounded-sm font-medium  shadow transition duration-500 hover:bg-slate-800 hover:text-white"
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      {title}
    </a>
  );
};

export default ShowButton;
