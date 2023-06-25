const Footer = () => {
  return (
    <div className="bg-[#430964] mt-12">
      <div className="mx-auto w-11/12 text-white">
        <p className="py-8 text-xl font-semibold">
          <span className="pr-5 font-bold text-[#D100C9] text-3xl">—</span>
          Contact us
        </p>

        <div id="container" className="flex justify-between mb-28">
          <div>
            <h2 className="text-4xl">Have a project in mind?</h2>
            <h2 className="text-4xl">Let's make it happen</h2>
          </div>

          <div id="address" className="text-2xl">
            <p>22 Lawley Road, Woodstock, 7925,</p>
            <p>Cape Town, South Africa</p>
            <p>+27 21 469 1500</p>
            <p>
              <u>enquirie@kingjames.co.za</u>
            </p>
          </div>
        </div>

        <div id="container" className="flex gap-36 pb-14">
          <div id="card" className="text-2xl">
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Impressum</p>
          </div>

          <div id="card" className="text-2xl">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>

          <div id="card" className="text-2xl">
            <p>Github</p>
            <p>Linkedin</p>
            <p>Teams</p>
          </div>

          <div id="card" className="text-2xl">
            <p>Youtube</p>
            <p>Behance</p>
            <p>Dribbble</p>
          </div>

          <div id="card" className="text-2xl">
            <p>Explore open jobs</p>
            <p className="text-[#430964]">.</p>
            <p>©2000—2022 King James Digital</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
