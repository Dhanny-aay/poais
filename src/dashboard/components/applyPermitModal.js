import { useState } from "react";
import ApplyStep1 from "./applyPermitModalComps/applyStep1";
import BusinessApplyStep2 from "./applyPermitModalComps/businessApplyStep2";
import BusinessInfoStep2 from "./applyPermitModalComps/businessInfoStep2";
import DriverInfoIDstep4 from "./applyPermitModalComps/driverInfoIDstep4";
import DriverInfoStep4 from "./applyPermitModalComps/driverInfostep4";
import EventApplyStep2 from "./applyPermitModalComps/eventApplyStep2";
import LocationApplyStep5 from "./applyPermitModalComps/locationApplyStep5";
import MotorApplyStep2 from "./applyPermitModalComps/motorApplyStep2";
import OrgInfoIDStep3 from "./applyPermitModalComps/orgInfoIDstep3";
import OrgInfoStep3 from "./applyPermitModalComps/orgInfoStep3";
import OwnerInfoIDStep3 from "./applyPermitModalComps/ownerInfoIDstep3";
import OwnerInfoStep3 from "./applyPermitModalComps/ownerInfoStep3";
import PaymentStep7 from "./applyPermitModalComps/paymentStep7";
import UndertakingStep6 from "./applyPermitModalComps/undertakingStep6";
import fileplus from "./assets/FilePlus.svg";
import xclose from "./assets/XClose button.svg";

const ApplyPermitModal = ({ setMakeModalVisible }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [permitType, setPermitType] = useState("");
  const [category, setCategory] = useState("");

  const individualMotorFlow = [
    MotorApplyStep2,
    OwnerInfoStep3,
    OwnerInfoIDStep3,
    DriverInfoStep4,
    DriverInfoIDstep4,
    LocationApplyStep5,
    UndertakingStep6,
    PaymentStep7,
  ];

  const organizationMotorFlow = [
    MotorApplyStep2,
    OrgInfoStep3,
    OrgInfoIDStep3,
    DriverInfoStep4,
    DriverInfoIDstep4,
    LocationApplyStep5,
    UndertakingStep6,
    PaymentStep7,
  ];

  const individualEventFlow = [
    EventApplyStep2,
    OwnerInfoStep3,
    OwnerInfoIDStep3,
    LocationApplyStep5,
    UndertakingStep6,
    PaymentStep7,
  ];

  const organizationEventFlow = [
    EventApplyStep2,
    OrgInfoStep3,
    OrgInfoIDStep3,
    LocationApplyStep5,
    UndertakingStep6,
    PaymentStep7,
  ];

  const individualBusinessFlow = [
    BusinessApplyStep2,
    BusinessInfoStep2,
    OwnerInfoStep3,
    OwnerInfoIDStep3,
    LocationApplyStep5,
    UndertakingStep6,
    PaymentStep7,
  ];

  const organizationBusinessFlow = [
    BusinessApplyStep2,
    BusinessInfoStep2,
    OrgInfoStep3,
    OrgInfoIDStep3,
    LocationApplyStep5,
    UndertakingStep6,
    PaymentStep7,
  ];

  const getCurrentFlow = () => {
    if (permitType === "Motor" && category === "individual")
      return individualMotorFlow;
    if (permitType === "Motor" && category === "organization")
      return organizationMotorFlow;
    if (permitType === "Event" && category === "individual")
      return individualEventFlow;
    if (permitType === "Event" && category === "organization")
      return organizationEventFlow;
    if (permitType === "Business" && category === "individual")
      return individualBusinessFlow;
    if (permitType === "Business" && category === "organization")
      return organizationBusinessFlow;
    return [];
  };

  const currentFlow = getCurrentFlow();

  const handleNext = () => {
    if (currentStep < currentFlow.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <ApplyStep1 setPermitType={setPermitType} setCategory={setCategory} />
      );
    }
    const StepComponent = currentFlow[currentStep - 1];
    return <StepComponent />;
  };

  return (
    <>
      <div className=" w-full md:w-[120%] h-full bg-[#1212128d] z-[99999] fixed top-0 md:-left-[20%] p-6 flex justify-center items-center">
        <div className=" md:ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px] h-[500px] 2xl:h-[700px] w-[600px]">
          <div className=" w-full h-full overflow-auto ">
            <span className=" w-full flex items-start justify-between">
              <img src={fileplus} className="" alt="" />
              <img
                onClick={() => {
                  setMakeModalVisible(false);
                }}
                src={xclose}
                className=" "
                alt=""
              />
            </span>
            <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
              Application for Permit
            </p>
            <p className=" text-[#5F6D7E] font-Inter font-normal text-sm mt-1 ">
              Fill all required information to get a permit
            </p>
            {renderStep()}
            <div className="w-full mt-4 grid grid-cols-2 gap-4">
              {currentStep === 0 ? (
                <button
                  onClick={() => {
                    setMakeModalVisible(false);
                  }}
                  className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
                >
                  Cancel
                </button>
              ) : (
                <button
                  onClick={handleBack}
                  className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                className="w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
              >
                {currentStep === currentFlow.length ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyPermitModal;
