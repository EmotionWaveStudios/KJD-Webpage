import { FaCcVisa } from "react-icons/fa6";
import { SiNike } from "react-icons/si";
import { SiBbc } from "react-icons/si";

const Brands = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p className="py-14 text-xl font-semibold">
        <span className="pr-5 font-bold text-[#D100C9] text-3xl">—</span> You'll
        be in good company
      </p>
      <h1 className="font-bold text-5xl pb-14">Trusted by leading brands</h1>

      <div id="row">
        <span>
          <FaCcVisa className="w-1/5 h-24" />
        </span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id="row">
        <span></span>
        <span>
          <SiNike className="w-1/5 h-24" />
        </span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id="row">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <SiBbc className="w-1/5 h-24" />
        </span>
      </div>
    </div>
  );
};

export default Brands;
