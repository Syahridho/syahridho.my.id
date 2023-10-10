const HoverDetail = ({ title }) => {
  return (
    <span className="hidden hover:block absolute top-full left-0 bg-slate-200 text-white p-1 rounded">
      {title}
    </span>
  );
};

export default HoverDetail;
