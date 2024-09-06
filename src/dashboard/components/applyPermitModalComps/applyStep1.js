import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ApplyStep1 = () => {
  return (
    <>
      <Skeleton height={20} className="mt-3" />
      <div className="w-full mt-4">
        <Skeleton height={15} />

        <Skeleton height={40} />
      </div>
      <div className="w-full mt-3">
        <Skeleton height={15} />

        <Skeleton height={40} />
      </div>
      <div className="w-full mt-3">
        <Skeleton height={15} />

        <Skeleton height={40} />
      </div>
    </>
  );
};

export default ApplyStep1;
