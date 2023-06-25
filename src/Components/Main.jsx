const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p className="py-14 text-xl font-semibold">
        <span className="pr-5 font-bold text-[#D100C9] text-3xl">—</span>What we
        do
      </p>
      <h1 className="font-bold text-5xl pb-14">
        We offer a complete range of bespoke design and development Services to
        help you turn your ideas into digital masterpieces
      </h1>
      <div id="container" className="flex gap-16">
        <div id="card" className="border-black border-2">
          <span></span>
          <h3 className="font-bold pb-14 text-3xl">Web development</h3>
          <p className="text-2xl">
            We use cutting-edge web development technologies to help our clients
            fulfill their business goals through functional, reliable solutions.
          </p>
        </div>

        <div id="card" className="border-black border-2">
          <span></span>
          <h3 className="font-bold pb-5 text-3xl">User experience & design</h3>
          <p className="text-2xl">
            Our complete web design services will bring your ideas to life and
            provide you with a sleek, high-performing product that elevates your
            business.
          </p>
        </div>

        <div id="card" className="border-black border-2">
          <span></span>
          <h3 className="font-bold pb-5 text-3xl">Mobile app development</h3>
          <p className="text-2xl">
            Our extensive mobile development experience allows us to create
            custom native and cross-platform iOS and Android mobile solutions
            for our clients.
          </p>
        </div>

        <div id="card" className="border-black border-2">
          <span></span>
          <h3 className="font-bold pb-14 text-3xl">Blockchain solutions</h3>
          <p className="text-2xl">
            We conduct market research to determine the optimal blockchain-based
            solutions to help you grow your company and achieve your business
            goals.
          </p>
        </div>
      </div>

      <p className="py-14 text-xl font-semibold">
        <span className="pr-5 font-bold text-[#D100C9] text-3xl">—</span> Case
        studies
      </p>
    </div>
  );
};

export default Main;
