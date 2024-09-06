import { useContext, useEffect, useState } from "react";
import { PaymentMethodContext } from "../../context/paymentContext";
import stepper from "./assets/Stepper5.svg";
import { PaystackButton } from "react-paystack";
import load from "./assets/load.gif";
import { handleTransactionUpdate } from "../../../controllers/transactionController";
import FileUpload from "../../../components/fileUpload";
import { useFetchApplicationContext } from "../../../UtilFunctions/FetchApplications";
import { useFetchTransactionContext } from "../../../UtilFunctions/FetchTransactions";
import { SameAsDriverContext } from "../../context/verifyContext";
import {
  ApplyModalContext,
  SuccessPromptContext,
} from "../../context/applicationContext";
// import { IdentifierContext } from "../../context/applicationContext";

const PaymentStep7 = () => {
  const publicKey = process.env.REACT_APP_PAYSTACK_KEY;
  const { fetchPermitApplications } = useFetchApplicationContext();
  const { fetchPermitTransactions } = useFetchTransactionContext();
  const [image, setImage] = useState(null);
  const [payment_receipt_upload, setPayment_receipt_upload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTotal, setSelectedTotal] = useState("");
  const [email, setEmail] = useState("");
  const [reference, setReference] = useState("");
  const [payment_gateway, setPayment_gateway] = useState("");
  const { same_as_driver, setSame_as_driver } = useContext(SameAsDriverContext);
  const { paymentResponse, setPaymentResponse } =
    useContext(PaymentMethodContext);
  const { makeModalVisible, setMakeModalVisible } =
    useContext(ApplyModalContext);
  const { successModal, setSucessModal } = useContext(SuccessPromptContext);
  const [emailError, setEmailError] = useState(false); // Track email validation state
  const [fileError, setFileError] = useState(false); // Track file validation state

  console.log(paymentResponse);

  const paymentMethods = paymentResponse.payment_methods;
  const identifier = paymentResponse.identifier;

  // console.log(paymentMethods);

  const handlePaymentMethodChange = (event) => {
    const selectedMethodName = event.target.value;
    const selectedMethod = paymentMethods.find(
      (method) => method.name === selectedMethodName
    );
    setPayment_gateway(selectedMethodName);

    if (selectedMethod) {
      setSelectedTotal(selectedMethod.total);
      setReference(selectedMethod.transaction_reference);
    } else {
      setSelectedTotal("");
    }
  };

  const handleFileSelected = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      setImage(base64Image); // Update the image state with the base64 string
    };
    reader.readAsDataURL(file); // Convert the file to base64
  };

  useEffect(() => {
    setPayment_receipt_upload(image);
  }, [image]);

  const validateEmail = () => {
    // Simple email validation check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setEmailError("Email is required"); // Display error if email is empty
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email"); // Display error if email format is invalid
      return false;
    } else {
      setEmailError(false); // No errors
      return true;
    }
  };
  const validateFile = () => {
    if (!payment_receipt_upload) {
      setFileError(true);
      return false;
    }
    setFileError(false);
    return true;
  };

  // Handle trasnaction submission
  const onSuccess = (response) => {
    setLoading(false);
    console.log(response);
    fetchPermitApplications(); // Fetch the applications upon success
    fetchPermitTransactions();
    setSame_as_driver(false);
    setMakeModalVisible(false);
    setSucessModal(true);
  };

  const onError = (error) => {
    setLoading(false);
    console.log(error);
  };

  const handleSubmit = () => {
    if (payment_gateway === "BankTransfer" && validateFile()) {
      setLoading(true);
      const userData = {
        payment_gateway,
        payment_receipt_upload,
      };
      handleTransactionUpdate(identifier, userData, onSuccess, onError);
    }
  };

  const handlePaystackClick = () => {
    if (!validateEmail()) {
      // If email validation fails, prevent Paystack payment
      return;
    }
    // Proceed with Paystack payment if validation passes
  };

  const componentProps = {
    email,
    amount: selectedTotal * 100,
    reference,
    publicKey,
    text: "Pay Now",
    onSuccess: (response) => {
      console.log(response);
      const userData = { payment_gateway, reference: response.reference };
      handleTransactionUpdate(identifier, userData, onSuccess, onError);
    },
    onClose: (response) => {
      console.log(response);
    },
  };

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
        Description
        <input
          type="text"
          value={paymentResponse.title}
          readOnly
          disabled
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name=""
          id=""
        />
      </label>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Estimated Payment for permit/fine
        <input
          type="text"
          value={"₦" + paymentResponse.total}
          readOnly
          disabled
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name=""
          id=""
        />
      </label>
      <label
        htmlFor="paymentMethod"
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Choose Payment Method
        <span className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            name="paymentMethod"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm"
            id="paymentMethod"
            onChange={handlePaymentMethodChange}
          >
            <option value="">Choose Payment Method</option>
            <option value="BankTransfer">Bank Transfer</option>
            {paymentMethods.length > 0 ? (
              paymentMethods.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))
            ) : (
              <option value="">Loading...</option>
            )}
          </select>
        </span>
      </label>
      {payment_gateway === "Paystack" && (
        <>
          <label
            htmlFor="total"
            className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
          >
            Total
            <input
              type="text"
              readOnly
              disabled
              className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
              name="total"
              id="total"
              value={"₦" + selectedTotal}
            />
          </label>

          <label
            htmlFor="email"
            className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
          >
            Email
            <input
              value={email}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(); // Revalidate on every change
              }}
              className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            />
            {emailError && (
              <span className="text-red-500 text-xs">{emailError}</span>
            )}
          </label>
        </>
      )}

      {payment_gateway === "Paystack" && (
        <PaystackButton
          {...componentProps}
          className={`w-full mt-4 py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base`}
          onClick={handlePaystackClick} // Validate email when clicked
        />
      )}

      {payment_gateway === "BankTransfer" && (
        <>
          <p className="text-[#272D37] font-Inter font-medium text-xs mt-4">
            Upload your transfer receipt(.pdf & max size of 5mb)
          </p>
          <FileUpload
            onFileSelected={handleFileSelected}
            acceptedTypes=".pdf"
            maxFileSize={5 * 1024 * 1024} // 5 MB in bytes
          />
          {fileError && (
            <span className="text-red-500 text-xs">
              Please upload your payment receipt
            </span>
          )}
          <button
            className=" w-full mt-4 py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
            onClick={handleSubmit}
          >
            {loading ? (
              <img src={load} className="w-[20px] h-[20px]" alt="Loading..." />
            ) : (
              "Submit"
            )}
          </button>
        </>
      )}
    </>
  );
};

export default PaymentStep7;
