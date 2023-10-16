import { Component } from "react";
import certificate from "../utils/Certificates/index";

class CertificateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: certificate(),
    };
  }

  render() {
    const selectedCertificate = this.state.all[this.props.item];

    if (!selectedCertificate) {
      return null; // or handle this case appropriately
    }

    return (
      <div className="grid flex-col gap-4 lg:flex-row lg:grid-cols-2">
        {Object.keys(selectedCertificate).map((key, index) => {
          return (
            <div
              key={index}
              className="rounded overflow-hidden border border-slate-500"
            >
              <img loading="lazy" src={selectedCertificate[key]} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CertificateList;
