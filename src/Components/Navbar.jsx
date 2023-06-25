const Navbar = () => {
  return (
    <div>
      <div className="bg-[#70259B] flex text-white w-full absolute">
        <div id="logo" className="border-red-600 border-2 w-1/5 text-center">
          <span className="text-2xl">K</span>
          <span className="text-3xl">J</span>
          <span className="text-2xl">D</span>
        </div>

        <div id="navbar" className="border-red-600 border-2 w-3/5 ">
          <ul className="flex py-1 px-3 border-red-600 border-2 w-1/3 mx-auto">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Industries</a>
            </li>
            <li>
              <a href="#">Cases</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div id="btn" className="border-red-600 border-2 w-1/5 text-center">
          <input
            type="submit"
            value="Let's Talk"
            className="bg-white text-[#70259B] h-3/5 min-w-1/3 px-7 py-5 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
