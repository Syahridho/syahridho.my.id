const NavigateCertificate = ({ onView }) => {
  return (
    <div className="my-8">
      <ul className="flex justify-center items-center gap-1">
        <li>
          <button
            className="bg-white rounded-full py-1 px-4 border border-slate-900 hover:bg-slate-800 hover:text-white active-certi"
            onClick={() => onView(0)}
          >
            Frond End
          </button>
        </li>
        <li>
          <button
            className="bg-white rounded-full py-1 px-4 border border-slate-900 hover:bg-slate-800 hover:text-white"
            onClick={() => onView(1)}
          >
            Back End
          </button>
        </li>
        <li>
          <button
            className="bg-white rounded-full py-1 px-4 border border-slate-900 hover:bg-slate-800 hover:text-white"
            onClick={() => onView(2)}
          >
            UI & UX
          </button>
        </li>
        <li>
          <button
            className="bg-white rounded-full py-1 px-4 border border-slate-900 hover:bg-slate-800 hover:text-white"
            onClick={() => onView(3)}
          >
            Network
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigateCertificate;
