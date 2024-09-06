import {
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";
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
import { TypeContext } from "../context/ActivePageContext";
import {
  CategoryIDContext,
  IdentifierContext,
} from "../context/applicationContext";
import { handleGetApplicationByID } from "../../controllers/applicationController";
import {
  ApplicationDependencyContext,
  SameAsDriverContext,
} from "../context/verifyContext";

const ApplyPermitModal = ({ setMakeModalVisible }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const { cateID } = useContext(CategoryIDContext);
  const { identifier } = useContext(IdentifierContext);
  const { same_as_driver } = useContext(SameAsDriverContext);
  const { type } = useContext(TypeContext);
  const { applicationDependency } = useContext(ApplicationDependencyContext);
  const [vehicleObject, setVehicleObject] = useState(null);
  const [applicationDetails, setApplicationDetails] = useState(null);

  const componentMap = useMemo(
    () => ({
      Event: [EventApplyStep2],
      Applicant: [OwnerInfoStep3, OwnerInfoIDStep3],
      Vehicle: [MotorApplyStep2],
      Driver: [DriverInfoStep4, DriverInfoIDstep4],
      Business: [OrgInfoStep3, OrgInfoIDStep3],
      Location: [LocationApplyStep5],
      Undertaking: [UndertakingStep6],
      Payment: [PaymentStep7],
    }),
    []
  );

  const getDynamicFlow = useCallback(() => {
    const dynamicFlow = applicationDependency.flatMap((dependency) => {
      if (dependency === "Driver" && same_as_driver) {
        return [];
      }
      return componentMap[dependency] || [];
    });

    return [...dynamicFlow, UndertakingStep6, PaymentStep7];
  }, [applicationDependency, same_as_driver, componentMap]);

  const currentFlow = useMemo(getDynamicFlow, [getDynamicFlow]);

  const fetchApplication = useCallback(async () => {
    try {
      const data = await handleGetApplicationByID(identifier);
      if (data) {
        setApplicationDetails(data);
      } else {
        // enqueueSnackbar("Failed to fetch profile data", { variant: "error" });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  }, [identifier]);

  useEffect(() => {
    fetchApplication();
  }, [cateID, fetchApplication]);

  // Centralized handleNext function
  const handleNext = useCallback(() => {
    if (currentStep < currentFlow.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, currentFlow.length]);

  // Centralized handleBack function
  const handleBack = useCallback(() => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  // Reference for the step container
  const stepContainerRef = useRef(null);

  // Scroll to top on step change
  useEffect(() => {
    if (stepContainerRef.current) {
      stepContainerRef.current.scrollTop = 0;
    }
  }, [currentStep]);

  const renderStep = () => {
    if (loading) {
      return <ApplyStep1 />;
    }

    const StepComponent = currentFlow[currentStep];

    return <StepComponent handleNext={handleNext} handleBack={handleBack} />;
  };

  return (
    <div className=" w-full md:w-[120%] h-full bg-[#1212128d] z-[999] fixed top-0 md:-left-[20%] p-6 flex justify-center items-center">
      <div className=" md:ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px] h-[500px] 2xl:h-[700px] w-[600px]">
        <div className=" w-full h-full overflow-auto ">
          <span className=" w-full flex items-start justify-between">
            <img src={fileplus} alt="" />
            <img
              onClick={() => setMakeModalVisible(false)}
              src={xclose}
              alt=""
            />
          </span>
          {type && (
            <p className=" font-Cabin capitalize font-semibold text-lg text-[#272D37]">
              Application for {type}
            </p>
          )}
          <p className=" text-[#5F6D7E] font-Inter font-normal text-sm mt-1 ">
            Fill all required information to get a permit
          </p>

          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default ApplyPermitModal;
