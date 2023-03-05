import PageBanner from "@/components/pageBanner";
const AboutUs = () => {
  const divisions = [
    "Agricultural business strategy.",
    "Production",
    "Trading",
    "Training",
  ];
  return (
    <>
      <PageBanner location="About Us" />
      <div className="px-[10vw] py-10">
        <p>
          Welcome to Agrikeys Services Limited! We are a team of experienced
          professionals who are passionate about helping farmers and
          agricultural businesses achieve their goals.
        </p>

        <br />
        <h2 className=" text-lg font-bold">Brief History</h2>
        <div>
          <p>
            Agrikeys Services Limited is a Financial and Agricultural Consulting
            Company which was incorporated in March 2017 and started operations
            with its offices at No 11a D.C Mang street, Rayfield Zarmaganda
            Road, Jos, Plateau State. In April 2017, Agrikeys expanded its
            operations to Abuja with its office at No.1B Ilorin Street, Area 8,
            Garki, Abuja In line with our goals to expand its services to reach
            the Nigerian Farmer and Small scale businesses, Agrikeys signed a
            contract to provide consultancy services to several organizations
            that seek to provide financial and business literacy to farmers and
            small scale businesses. The company provides consultancy services to
            Anadariya Farms in Kano, AFC Mills in Kano, Jos flour mills in Jos,
            Harkar Engineering Ltd in Kaduna and Guided integrated farms, Kaduna
            to provide business strategy and monitoring of their expansion
            projects.
          </p>

          <br />
          <br />

          <p>Agrikeys is divided into four distinctive divisions:</p>

          <div className="flex text-white font-bold flex-wrap gap-5">
            {divisions.map((_division, index) => {
              return (
                <div key={index}>
                  <div className="h-28 grid place-items-center w-28 bg-green-500 p-3">{_division}</div>
                </div>
              );
            })}
          </div>

          <br />
          <p>
            We are focused on bringing a higher level of quality to the
            Agricultural business by developing robust strategy that is feasible
            for financiers and also best production practices that improve both
            yield and profits for the farmers. As part of its commitment to
            developing the knowledge of Agribusiness, Agrikeys seeks to train
            and develop farmers on Agricultural financing and best methods of
            production. To ensure that the farmers get the best value for their
            money Agrikeys aggregates produce at the best competitive advantage
            for the farmer to ensure that the farmers make enough margins that
            would ensure they successfully return to the farm the following
            year.
          </p>
        </div>

        <div className=" flex flex-col gap-5 mt-5 bg-gray-100 p-4">
          <div className="max-w-md">
            <h1 className="font-bold">Our Vision</h1>
            <p>
              We aim to be the first choice providers of agricultural services
              in Nigeria
            </p>
          </div>

          <div className="max-w-md">
            <h1 className="font-bold">Our Mission</h1>
            <p>
              Our Mission is to provide consultancy services to aid easy access
              and utilizaiton of funds, Socially and economically empower the
              Nigerian farmer and SMEs through Market and financial linkages,
              training, Financial literacy, Business Education, Project
              Management and farmer information
            </p>
          </div>
        </div>

        {/* <p className="mt-5">
          Our company was founded with the belief that a successful agricultural
          business requires more than just planting and harvesting crops. It
          requires a deep understanding of the land, the weather, the market,
          and the latest technologies and techniques.
        </p>

        <p>
          With years of experience in the agriculture industry, our team has a
          proven track record of providing practical, effective solutions to our
          clients. We work closely with farmers, ranchers, and other
          agricultural businesses to help them maximize their production, reduce
          their costs, and improve their profitability.
        </p>

        <p>
          Our consulting services cover a wide range of areas, including crop
          management, livestock management, irrigation and water management,
          soil health, pest and disease management, and more. We use the latest
          data and technology to provide our clients with accurate, actionable
          insights that help them make informed decisions.
        </p>

        <p>
          At our agriculture consulting company, we pride ourselves on our
          commitment to our clients. We understand that every farm and
          agricultural business is unique, and we work closely with our clients
          to develop customized solutions that meet their specific needs and
          goals.
        </p>

        <p>
          We believe that agriculture is more than just a business {"-"} it is a
          way of life. We are dedicated to helping our clients succeed, and we
          look forward to working with you to achieve your goals. Contact us
          today to learn more about our consulting services and how we can help
          your business thrive.
        </p> */}
      </div>
    </>
  );
};
export default AboutUs;
