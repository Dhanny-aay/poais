import stepper from "./assets/Stepper5.svg";

const UndertakingStep6 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Undertaking
      </p>
      <div className=" w-full flex items-start justify-start mt-4 space-x-3">
        <input type="checkbox" name=" w-5 h-5 rounded-[5px]" id="" />
        <p className=" font-Inter font-normal -mt-1 text-[#272D37] text-sm">
          I, [Applicant's Name], hereby undertake to comply with all the terms
          and conditions associated with the permit to operate beyond 12 AM in
          Benue State. I understand that any violation of these terms may result
          in the revocation of the permit and/or legal action. I also confirm
          that all the information provided in this application is true and
          accurate to the best of my knowledge. I agree to hold harmless the
          issuing authority from any claims, damages, or liabilities arising
          from the use of this permit.
        </p>
      </div>
      <div className=" w-full flex items-start justify-start mt-4 space-x-3">
        <input type="checkbox" name=" w-5 h-5 rounded-[5px]" id="" />
        <p className=" font-Inter font-normal -mt-1 text-[#272D37] text-sm">
          Agree to terms & conditions
        </p>
      </div>
    </>
  );
};

export default UndertakingStep6;
