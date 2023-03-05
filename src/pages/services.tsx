import PageBanner from "@/components/pageBanner";
import { servicesOffered } from "@/services/services.service";

const Services = () => {
  return (
    <>
      <PageBanner location="Our Services" />
    <div  className="px-[10vw] py-10">
      {servicesOffered.map((_service, index) => {
        return (
          <div key={index} className="my-5">
            <h2 className="font-bold">{_service.service}</h2>
            <p>{_service.text}</p>
          </div>
        );
      })}
    </div>
    </>
  );
};
export default Services;
