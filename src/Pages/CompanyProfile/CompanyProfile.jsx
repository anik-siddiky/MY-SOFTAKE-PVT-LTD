import { Link } from 'react-router';
import banner from '../../assets/aboutPhoto.jpg';
import companyPro from '../../assets/company_title.jpg';
import corporateBanner from '../../assets/corporateBanner.jpg';
import exportPointImg from '../../assets/exportPoint.gif';
import { useEffect } from 'react';

const CompanyProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-[1000px] mx-auto pt-5 pb-10 lg:px-0 px-3">
      <p className="text-[12px] pb-5 text-end">
        <Link
          to="/"
          className="text-[#FF9600] hover:underline cursor-pointer"
        >
          MY SOFTAKE PVT. LTD.
        </Link>{" "}
        {">"} Company Profile
      </p>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <img
          className="w-full lg:w-auto h-auto lg:h-[300px] object-cover"
          src={banner}
          alt=""
        />

        <div className="space-y-10">
          <img className="w-full" src={companyPro} alt="" />


          <p className="text-center text-[12px] leading-[1.9] px-2 lg:px-0">
            Our company is built on a diverse foundation of expertise across multiple industries. <br />
            From <b>manufacturing</b> high-quality products and driving international <b>import/export</b> trade, to providing innovative <b>IT solutions</b> and seamless <b>travel services</b>, we are committed to excellence at every stage. <br />
            With a strong presence in <b>logistics</b> and <b>construction</b>, we ensure efficiency, reliability, and growth while embracing the future through <b>eco-friendly products</b> and sustainable practices. <br />
            Professional teams across each sector work with dedication to meet the evolving needs of our customers worldwide. <br />
            Guided by sincerity, quality, and speed, we continue to strengthen relationships and expand our reach in the global market.
          </p>


          <img className="w-full" src={corporateBanner} alt="" />

          <section className="px-2 lg:px-0">
            <p className="text-xl mb-4">Company Description</p>

            <div className="overflow-x-auto">
              <table className="text-[13px] w-full border-collapse min-w-[400px]">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">
                      Name of the company
                    </th>
                    <td className="p-2.5 align-top">MY SOFTAKE PVT. LTD.</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">
                      Moto
                    </th>
                    <td className="p-2.5 align-top">Building Dreams, Creating Trust, Connecting the World.</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">
                      Headquarters
                    </th>
                    <td className="p-2.5 align-top">
                      〒170-0013, Tokyo, Toshima-ku, Ikebukuro 2-13-3-405, Japan
                      <br />
                      <br />
                      Corporate Office (Bangladesh): Sector 9, Road 3E, House 4, Lift 6th, Bangladesh
                      <br />
                      <br />
                      Branch & Distribution Office (Bangladesh): 33/34, East Nakhalpara, Tejgaon I/A, Dhaka-1215, Bangladesh
                      <br />
                      <br />
                      China Office: 1102, Building A, Ziliujin Business Center, Hefei City, Anhui Province, China
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">
                      Date founded
                    </th>
                    <td className="p-2.5 align-top">2025</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">
                      Capital
                    </th>
                    <td className="p-2.5 align-top">Joint investment (Bangladeshi + Chinese + Japanese) — 1 Billion</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">
                      Directors
                    </th>
                    <td className="p-2.5 align-top">
                      ABU FUZAEL — Chairman
                      <br />
                      MD. YEASIN ARAFAT — Managing Director
                      <br />
                      TAMZID HOSSAIN TAMIM — Director (Head of Marketing)
                      <br />
                      MD. MOBARAK HOSSAIN MAHIN — Director
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">
                      Managing <br /> Director
                    </th>
                    <td className="p-2.5 align-top">Md. Yeasin Arafat</td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-top">
                      Number of employees
                    </th>
                    <td className="p-2.5 align-top">
                      Employees: 12 (initial core team)
                    </td>
                  </tr>

                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-middle">
                      Bank accounts
                    </th>
                    <td className="p-2.5 align-top leading-[1.8]">
                      Registered in Bangladesh and Japan
                    </td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="text-[#FE9900] w-[138px] text-start p-2.5 align-middle">
                      Business description
                    </th>
                    <td className="p-2.5 align-top leading-[1.8]">
                      Manufacturing <br />
                      Import & Export <br />
                      IT <br />
                      Travel <br />
                      Logistics <br />
                      Construction <br />
                      Eco-friendly products <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <p className="text-[12px] leading-[1.9] px-2 lg:px-0">
            RJSC Certificate No. C-203489/2025
            <br />
            Trade License: TRAD/DNCC/007485/2025
          </p>

          {/* Map */}
          <div className="w-full h-[250px] sm:h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d270.4824208220123!2d90.39767928041793!3d23.87560253890038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c58ca4f666c3%3A0xdfd0ff1b0dc26c9f!2sHouse%2027%2C%20Road%202%2C%20Sector%209%2C%20Uttara%20Dhaka%201230!5e1!3m2!1sen!2sbd!4v1757765197781!5m2!1sen!2sbd"

              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <Link to="/export-base" className="flex justify-center">
            <img className="w-full sm:w-auto" src={exportPointImg} alt="" />
          </Link>

          <div className='flex justify-center'>
            <button onClick={handlePrint} className="mt-4 bg-[#FF9600] text-white px-4 py-2 rounded">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
