import PageBanner from "@/components/pageBanner";
import { managementStaff, board } from "@/services/managementStaff.service";
const Management = () => {
  return (
    <>
      <PageBanner location="Management" />
      <div className="px-[10vw] py-10">
        <div>
          <p className="text-center text-4xl">Management Staff</p>
          {managementStaff.map((_staff, index) => {
            return (
              <div key={index} className="flex flex-col mb-7 " >
                <div className=" my-5 h-52 w-52">
                  <img
                    src={_staff.image}
                    className="h-full w-full min-w-[9em] object-cover"
                  />
                </div>
                <div className="p-1 font-semibold">
                    <p className="text-2xl">{_staff.name}</p>
                    <p>{_staff.position}</p>
                    <p className="text-sm mt-3">{_staff.profile}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <p className="text-center text-4xl">Management Board</p>
          {board.map((_staff, index) => {
            return (
              <div key={index} className="flex  flex-col mb-7 " >
                <div className=" my-5 h-52 w-52">
                  <img
                    src={_staff.image}
                    className="h-full w-full min-w-[9em] object-cover"
                  />
                </div>
                <div className="p-1 font-semibold">
                    <p className=" text-2xl">{_staff.name}</p>
                    <p>{_staff.position}</p>
                    <p className="text-sm mt-3">{_staff.profile}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Management;
