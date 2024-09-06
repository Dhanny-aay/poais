import { useContext, useMemo, useState } from "react";
import stepper from "./assets/Stepper5.svg";
import {
  ApplicationTypeContext,
  CategoryIDContext,
  IdentifierContext,
} from "../../context/applicationContext";
import { CategoryContext } from "../../context/ActivePageContext";
import { PaymentMethodContext } from "../../context/paymentContext";
import load from "./assets/load.gif";
import { handleUpdateApplication } from "../../../controllers/applicationController";
import { useFetchApplicationContext } from "../../../UtilFunctions/FetchApplications";

const UndertakingStep6 = ({ handleNext, handleBack }) => {
  const { identifier } = useContext(IdentifierContext);
  const { applicationType } = useContext(ApplicationTypeContext);
  const { categoryType } = useContext(CategoryContext);
  const { cateID } = useContext(CategoryIDContext);
  const { setPaymentResponse } = useContext(PaymentMethodContext);
  const [loading, setLoading] = useState(false);
  const { fetchPermitApplications } = useFetchApplicationContext();
  const [errors, setErrors] = useState({});
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [complianceAgreed, setComplianceAgreed] = useState(false);

  const formData = useMemo(
    () => ({
      application_type: applicationType,
      entity_type: categoryType,
      category_id: cateID,
    }),
    [applicationType, categoryType, cateID]
  );

  const validateFields = () => {
    const newErrors = {};

    if (!complianceAgreed) {
      newErrors.compliance = "You must agree to comply with the terms.";
    }

    if (!termsAgreed) {
      newErrors.terms = "You must agree to the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return validation status
  };

  const onSuccess = (response) => {
    setLoading(false);
    console.log(response.data);
    fetchPermitApplications();
    setPaymentResponse(response.data);
    handleNext(); // Proceed to the next step after success
  };
  const onError = () => {
    setLoading(false);
    // navigate("/studentlogin");\
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const isValid = validateFields();

    if (isValid) {
      setLoading(true);

      const userData = formData;

      handleUpdateApplication(identifier, userData, onSuccess, onError);
    }
  };

  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Undertaking
      </p>
      <div className=" w-full flex items-start justify-start mt-4 space-x-3">
        <input
          type="checkbox"
          name="compliance"
          className="w-5 h-5 rounded-[5px]"
          checked={complianceAgreed}
          onChange={(e) => setComplianceAgreed(e.target.checked)}
        />
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
      {errors.compliance && (
        <p className="text-red-500 text-xs mt-1">{errors.compliance}</p>
      )}
      <div className=" w-full flex items-center justify-start mt-4 space-x-3">
        <input
          type="checkbox"
          name="terms"
          style={{ width: "20px", height: "20px" }}
          className=" w-5 h-5 rounded-[5px]"
          checked={termsAgreed}
          onChange={(e) => setTermsAgreed(e.target.checked)}
        />
        <p className=" font-Inter font-normal text-[#272D37] text-sm">
          Agree to terms & conditions
        </p>
      </div>
      {errors.terms && (
        <p className="text-red-500 text-xs mt-1">{errors.terms}</p>
      )}

      <div className="flex justify-center gap-4 pt-6 pb-4">
        <button
          className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? (
            <img src={load} className="w-4" alt="Loading..." />
          ) : (
            "Proceed"
          )}
        </button>
      </div>
    </>
  );
};

export default UndertakingStep6;
