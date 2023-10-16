import { useState } from "react";
import CertificateList from "../../../../components/CertificateList";
import Navigasi from "../../../../components/Navigasi";
import NavigateCertificate from "../../../../components/NavigateCertificate";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AllCertificate = () => {
  const [view, setView] = useState(0);
  const handleView = (select) => {
    setView(select);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col lg:w-[1024px] xl:w-[1150px] lg:mx-auto lg:flex-row">
      <Navigasi />
      <div className="w-full h-auto lg:mt-10">
        <div className="p-8">
          <h1 className="font-medium text-2xl text-slate-800 tracking-wide mt-4 mb-6">
            All Certificate
          </h1>
          <Link to={"/certificates"}>Back</Link>
          <NavigateCertificate onView={handleView} />
          <CertificateList item={view} />
        </div>
      </div>
    </div>
  );
};

export default AllCertificate;
