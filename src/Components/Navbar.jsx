const Navbar = () => {
  return (
    <div>
      <div className="bg-[#70259B] flex text-white w-full fixed">
        <div id="logo" className="w-1/5 flex justify-center items-center">
          <p className="text-3xl">K</p>
          <p className="text-4xl">J</p>
          <p className="text-3xl">D</p>
        </div>

        <ul className="flex gap-7 w-3/5  text-lg py-4 px-3 items-center justify-center">
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

        <div id="btn" className=" w-1/5 text-center">
          <input
            type="submit"
            value="Let's Talk"
            className="bg-white text-[#70259B] min-w-1/3 px-7 py-2 mt-3 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
