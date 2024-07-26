import stepper from "./assets/Stepper5.svg";

const PaymentStep7 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Payment
      </p>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Estimated Payment for permit
        <input
          type="text"
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name=""
          id=""
        />
      </label>
      <label
        htmlFor=""
        className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Choose Payment method
        <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            name=""
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
            id=""
          >
            <option value="">Choose Payment method</option>
          </select>
        </span>
      </label>
    </>
  );
};

export default PaymentStep7;
