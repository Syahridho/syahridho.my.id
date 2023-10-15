import { connect } from "react-redux";
import { Component } from "react";
import projectsData from "./../../../../utils/Projects";
import { Link } from "react-router-dom";
import CodePaste from "../../../../components/codePaste";
import ShowButton from "../../../../components/ShowButton";

// react icons
import { BiLeftArrowCircle } from "react-icons/bi";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: projectsData(),
      select: {},
    };
  }

  componentDidMount() {
    const selectData = this.state.datas[this.props.detail - 1];
    this.setState({
      ...this.state,
      select: selectData,
    });
  }

  render() {
    return (
      <div className="mx-8 lg:px-10 lg:w-[800px] xl:w-[900px] lg:mx-auto ">
        <div className="w-full h-[1000px]  lg:mt-10">
          <div className="pt-5 pb-10 bg-white">
            <Link
              to={"/projects"}
              className="flex items-center text-xl gap-2 drop-shadow-sm transition duration-500 hover:translate-x-2"
            >
              <BiLeftArrowCircle className="w-6 h-6  text-slate-800" />
              Back
            </Link>
          </div>
          <div>
            <div className="overflow-hidden">
              <img
                src={this.state.select.img}
                alt=""
                className="mx-auto w-11/12 rounded-md shadow transition duration-500 sm:w-2/3  hover:scale-110"
              />
            </div>
            <h1 className="mt-6 text-2xl font-medium">
              {this.state.select.title}
            </h1>

            <p>web ini saya mengguakan figma dan beberapa tambahan </p>
          </div>
          <div>
            <CodePaste code={"npm run dev"} />
          </div>
          <div className="mt-10 flex justify-end">
            <ShowButton
              title="See Project"
              link={"https://tailwind-hl.syahridhoas.repl.co"}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.detail,
  };
};

export default connect(mapStateToProps)(Detail);
