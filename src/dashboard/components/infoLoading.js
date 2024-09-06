import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const InfoLoading = () => {
  return (
    <div>
      <Skeleton width={120} height={24} className="mt-6" />
      <Skeleton width={180} height={16} className="mt-1" />

      <div className="mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
        <div className="w-full border-b border-[#E4E7EC] p-6">
          <div className="flex items-center justify-between w-full">
            <div className="w-[48%] flex flex-col">
              <Skeleton width={80} height={16} />
              <Skeleton className="mt-2" height={40} borderRadius={6} />
            </div>
            <div className="w-[48%] flex flex-col">
              <Skeleton width={80} height={16} />
              <Skeleton className="mt-2" height={40} borderRadius={6} />
            </div>
          </div>
          <div className="w-full mt-4 flex flex-col">
            <Skeleton width={120} height={16} />
            <Skeleton className="mt-2" height={80} borderRadius={6} />
          </div>
        </div>
        <div className="w-full p-6 flex items-end">
          <div className="flex space-x-3 items-end w-full justify-end">
            <Skeleton width={80} height={36} borderRadius={8} />
            <Skeleton width={100} height={36} borderRadius={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoLoading;
