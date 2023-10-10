import { connect } from "react-redux";
import { Component } from "react";
import { projectsData } from "./../../../../utils";
import { Link } from "react-router-dom";

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
      <div className="mx-8 lg:h-screen lg:w-[1024px] xl:w-[1150px] lg:mx-auto ">
        <div className="w-full h-[1000px]  lg:py-8 lg:mt-10">
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
                className="rounded-md shadow transition duration-500 hover:scale-110"
              />
            </div>
            <h1 className="mt-6 text-xl font-semibold">
              {this.state.select.title}
            </h1>
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
