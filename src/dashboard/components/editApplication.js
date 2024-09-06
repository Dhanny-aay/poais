import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/ActivePageContext";
import add from "./assets/Add button.svg";
import { CurrentIdentifierContext } from "../context/applicationContext";
import { handleGetApplicationByID } from "../../controllers/applicationController";
import InfoLoading from "./infoLoading";

const EditApplication = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  const { currIdentifier, setCurrIdentifier } = useContext(
    CurrentIdentifierContext
  );
  const [applicationDetails, setApplicationDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jsonObject, setJsonObject] = useState(null);
  const [staffJsonObject, setStaffJsonObject] = useState(null);
  const [vehicle, setVehicleObject] = useState([]);
  const [event, setEventObject] = useState([]);
  const [staff_applicant, setStaff_applicantObject] = useState([]);

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const data = await handleGetApplicationByID(currIdentifier);
        if (data) {
          const recievedItems = data.data;
          setApplicationDetails(recievedItems);
        } else {
          // enqueueSnackbar("Failed to fetch profile data", { variant: "error" });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, []);

  console.log(applicationDetails);

  useEffect(() => {
    if (
      applicationDetails &&
      applicationDetails.user_applicant &&
      applicationDetails.user_applicant.summary
    ) {
      try {
        const jsonString = applicationDetails.user_applicant.summary;
        const parsedJson = JSON.parse(jsonString);
        setJsonObject(parsedJson);
      } catch (error) {
        console.error("Invalid JSON string:", error);
      } finally {
        //  setLoading(false);
      }
    } else {
      //  setLoading(true);
    }
  }, [applicationDetails]);

  useEffect(() => {
    if (
      applicationDetails &&
      applicationDetails.staff_applicant &&
      applicationDetails.staff_applicant.summary
    ) {
      try {
        const jsonString = applicationDetails.staff_applicant.summary;
        const parsedJson = JSON.parse(jsonString);
        setStaffJsonObject(parsedJson);
      } catch (error) {
        console.error("Invalid JSON string:", error);
      } finally {
        //  setLoading(false);
      }
    } else {
      //  setLoading(true);
    }
  }, [applicationDetails]);

  useEffect(() => {
    if (applicationDetails) {
      if (applicationDetails.event) {
        setEventObject(applicationDetails.event);
      }
      if (applicationDetails.vehicle) {
        setVehicleObject(applicationDetails.vehicle);
      }
      if (applicationDetails.staff_applicant) {
        setStaff_applicantObject(applicationDetails.staff_applicant);
      }
    }
  }, [applicationDetails]);

  console.log(jsonObject);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid Date";
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <p className=" font-Cabin font-bold text-xl text-[#101828]">
          View My Application
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-sm mt-1 border-b border-[#EAEBF0] w-full pb-4">
          View your permit application here.
        </p>

        {loading ? (
          <InfoLoading />
        ) : (
          <>
            {/* permit Info  */}
            <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
              Permit info
            </p>
            <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
              View your permit details here.
            </p>
            <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
              <div className=" w-full  p-6">
                <div className=" flex items-center justify-between w-full">
                  {/* <label
                    htmlFor=""
                    className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                  >
                    Permit type
                    <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                      <select
                        name=""
                        className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                        id=""
                      >
                        <option value="">Choose permit type</option>
                      </select>
                    </span>
                  </label> */}
                  <label
                    htmlFor=""
                    className=" w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                  >
                    Use of Permit
                    <input
                      placeholder="Enter Use of Permit"
                      defaultValue={applicationDetails.category}
                      className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                    />
                  </label>
                </div>
                <label
                  htmlFor=""
                  className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                >
                  Purpose of Permit
                  <textarea
                    placeholder="Enter Purpose of Permit"
                    defaultValue={
                      Object.keys(event).length
                        ? event.purpose
                        : vehicle.purpose
                    }
                    className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
                  />
                </label>
              </div>
              {/* <div className=" w-full p-6 flex items-end">
                <div className="  flex space-x-3 items-end w-full justify-end">
                  <button className=" border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                    Cancel
                  </button>
                  <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                    Save changes
                  </button>
                </div>
              </div> */}
            </div>

            {vehicle && Object.keys(vehicle).length > 0 && (
              <>
                {/* permit Info  */}
                <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
                  Vehicle info
                </p>
                <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
                  View your vehicle details here.
                </p>
                <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
                  <div className=" w-full  p-6">
                    <div className=" flex items-center justify-between w-full">
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Vehicle type
                        <input
                          placeholder="Enter Use of Permit"
                          defaultValue={vehicle.type}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Make
                        <input
                          placeholder="Enter Use of Permit"
                          defaultValue={vehicle.make}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                    </div>
                    <div className=" flex items-center justify-between w-full mt-4">
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Model
                        <input
                          placeholder="Enter Use of Permit"
                          defaultValue={vehicle.model}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Plate Number
                        <input
                          placeholder="Enter Use of Permit"
                          defaultValue={vehicle.plate_number}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                    </div>
                    <div className=" flex items-center justify-between w-full mt-4">
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Year
                        <input
                          placeholder="Enter Use of Permit"
                          defaultValue={vehicle.year}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Vehicle Identity Number
                        <input
                          placeholder="Enter Use of Permit"
                          defaultValue={vehicle.vin}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                    </div>
                    <label
                      htmlFor=""
                      className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      Purpose of Permit
                      <textarea
                        placeholder="Enter Purpose of Permit"
                        defaultValue={
                          Object.keys(event).length
                            ? event.purpose
                            : vehicle.purpose
                        }
                        className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
                      />
                    </label>
                  </div>
                  {/* <div className=" w-full p-6 flex items-end">
                <div className="  flex space-x-3 items-end w-full justify-end">
                  <button className=" border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                    Cancel
                  </button>
                  <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                    Save changes
                  </button>
                </div>
              </div> */}
                </div>
              </>
            )}

            {/* Owner Information  */}
            <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
              Owner Information
            </p>
            <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
              View owner information here.
            </p>
            {jsonObject && (
              <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
                <div className=" w-full  p-6">
                  <div className=" flex items-center justify-between w-full">
                    <label
                      htmlFor=""
                      className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      First Name
                      <input
                        placeholder="Enter First Name"
                        defaultValue={jsonObject.firstname}
                        className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                    <label
                      htmlFor=""
                      className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      Last Name
                      <input
                        placeholder="Enter Last Name"
                        defaultValue={jsonObject.lastname}
                        className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                  </div>
                  <label
                    htmlFor=""
                    className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                  >
                    Address
                    <input
                      placeholder="Enter Address"
                      defaultValue={jsonObject.residence.address1}
                      className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                    />
                  </label>
                  <div className=" flex items-center justify-between w-full mt-4">
                    <label
                      htmlFor=""
                      className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      Local Government Area of Residence
                      <input
                        placeholder="Enter Local Government Area of Residence"
                        defaultValue={jsonObject.residence.lga}
                        className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                    <label
                      htmlFor=""
                      className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      State of Residence
                      <input
                        placeholder="Enter State of Residence"
                        defaultValue={jsonObject.residence.state}
                        className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                  </div>
                  <div className=" flex items-center justify-between w-full mt-4">
                    <label
                      htmlFor=""
                      className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      Phone Number
                      <input
                        placeholder="Enter Phone Number"
                        defaultValue={jsonObject.phone}
                        className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                    <label
                      htmlFor=""
                      className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      Email Address
                      <input
                        placeholder="Enter Email Address"
                        defaultValue={applicationDetails.user_applicant.email}
                        className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                  </div>
                  <div className=" flex items-center justify-between w-full mt-4">
                    {/* <label
                      htmlFor=""
                      className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      ID Verification
                      <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                        <select
                          name=""
                          className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                          id=""
                        >
                          <option value="">Choose ID type</option>
                        </select>
                      </span>
                    </label> */}
                    <label
                      htmlFor=""
                      className=" w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      NIN Number
                      <input
                        placeholder="Enter ID Number"
                        defaultValue={jsonObject.nin}
                        className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                  </div>

                  {/* <div className=" mt-3 w-full border border-[#DAE0E6] border-dashed rounded-[5px] flex items-center justify-center flex-col p-6">
                  <img src={add} alt="" />
                  <p className=" mt-3 text-xl font-medium font-Inter text-[#272D37]">
                    Drop your Files Here
                  </p>
                  <p className=" mt-1 text-xs font-normal font-Inter text-[#5F6D7E]">
                    <span className=" font-medium text-[#01903C] mr-1">
                      Browse Files
                    </span>
                    from your Computer
                  </p>
                </div> */}
                </div>
                {/* <div className=" w-full p-6 flex items-end">
                <div className="  flex space-x-3 items-end w-full justify-end">
                  <button className=" border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                    Cancel
                  </button>
                  <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                    Save changes
                  </button>
                </div>
              </div> */}
              </div>
            )}
            {/* Driver/Rider Information  */}
            {vehicle && Object.keys(vehicle).length > 0 && (
              <>
                <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
                  Driver/Rider Information
                </p>
                <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
                  View your Driver/Rider Information here.
                </p>
                <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
                  <div className=" w-full p-6">
                    <div className=" flex items-center justify-between w-full">
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        First Name
                        <input
                          defaultValue={staffJsonObject.firstname}
                          placeholder="Enter First Name"
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Last Name
                        <input
                          defaultValue={staffJsonObject.lastname}
                          placeholder="Enter Last Name"
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                    </div>
                    <label
                      htmlFor=""
                      className=" w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs mt-4"
                    >
                      Address
                      <input
                        placeholder="Enter Address"
                        defaultValue={staffJsonObject.residence.address1}
                        className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                    <div className=" flex items-center justify-between w-full mt-4">
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Local Government Area
                        <input
                          placeholder="Enter Local Government Area"
                          defaultValue={staffJsonObject.residence.lga}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        State
                        <input
                          placeholder="Enter State"
                          defaultValue={staffJsonObject.residence.state}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                    </div>
                    <div className=" flex items-center justify-between w-full mt-4">
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Phone Number
                        <input
                          placeholder="Enter Phone Number"
                          defaultValue={staffJsonObject.phone}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                      <label
                        htmlFor=""
                        className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        Email Address
                        <input
                          placeholder="Enter Email Address"
                          defaultValue={
                            applicationDetails.staff_applicant.email
                          }
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                    </div>
                    <div className=" flex items-center justify-between w-full mt-4">
                      {/* <label
                    htmlFor=""
                    className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                  >
                    ID Verification
                    <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                      <select
                        name=""
                        className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                        id=""
                      >
                        <option value="">Choose ID type</option>
                      </select>
                    </span>
                  </label> */}
                      <label
                        htmlFor=""
                        className=" w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                      >
                        ID Number
                        <input
                          placeholder="Enter ID Number"
                          defaultValue={staffJsonObject.nin}
                          className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                        />
                      </label>
                    </div>
                  </div>
                  {/* <div className=" w-full p-6 flex items-end">
                <div className="  flex space-x-3 items-end w-full justify-end">
                  <button className=" border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                    Cancel
                  </button>
                  <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                    Save changes
                  </button>
                </div>
              </div> */}
                </div>
              </>
            )}
            {event && Object.keys(event).length > 0 && (
              <>
                {/* Driver/Rider Information  */}
                <p className="font-Cabin font-bold text-lg text-[#101828] mt-6">
                  License Location Information
                </p>
                <div className="mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
                  <div className="w-full p-6">
                    <label
                      htmlFor=""
                      className="w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                    >
                      Address
                      <input
                        placeholder="Enter Local Government Area"
                        defaultValue={event.location_address}
                        className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                    <label
                      htmlFor=""
                      className="w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs mt-4"
                    >
                      Local Government Area
                      <input
                        placeholder="Enter Local Government Area"
                        defaultValue={event.lga}
                        className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>
                    <label
                      htmlFor=""
                      className="w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs mt-4"
                    >
                      State
                      <input
                        placeholder="Enter State"
                        defaultValue={event.state}
                        className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                      />
                    </label>

                    <>
                      <p className="mt-4 font-Inter text-base text-[#272D37] font-medium">
                        Duration of Permit
                      </p>
                      <div className="flex items-center justify-between w-full mt-3">
                        <label
                          htmlFor=""
                          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                        >
                          Start date
                          <input
                            placeholder=""
                            defaultValue={formatDate(event.start_date)}
                            className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                          />
                        </label>
                        <label
                          htmlFor=""
                          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
                        >
                          Due date
                          <input
                            placeholder=""
                            defaultValue={formatDate(event.end_date)}
                            className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                          />
                        </label>
                      </div>
                    </>
                  </div>
                  {/* <div className="w-full p-6 flex items-end">
                    <div className="flex space-x-3 items-end w-full justify-end">
                      <button className="border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                        Cancel
                      </button>
                      <button className="bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                        Save changes
                      </button>
                    </div>
                  </div> */}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default EditApplication;
