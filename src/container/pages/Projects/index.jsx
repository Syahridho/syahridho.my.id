import { projectsData } from "./../../../utils/index";
import Navigasi from "../../../components/Navigasi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CardProject from "./../../../components/CardProject";

const Projects = () => {
  const [datas, setDatas] = useState(projectsData());

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleView = (id) => {
    navigate(`/projects/${id}`);
    dispatch({ type: "UPDATE_DETAIL", detail: id });
  };

  return (
    <div className="flex flex-col lg:w-[1024px] xl:w-[1150px] lg:mx-auto lg:flex-row">
      <Navigasi />
      <div className="w-full bg-white h-[1000px] lg:mt-10">
        <div className="p-8">
          <h1 className="font-medium text-2xl text-slate-800 tracking-wide mt-4 mb-6">
            Projects
          </h1>
          <div className="grid gap-6 w-full lg:flex-row lg:grid-cols-2 lg:justify-between">
            {datas.map((data) => {
              return (
                <CardProject
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  img={data.img}
                  view={handleView}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
