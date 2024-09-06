import { createContext, useState } from "react";

export const ApplicationDependencyContext = createContext();
export const UserApplicantIDContext = createContext();
export const CompanyResponseContext = createContext();
export const NationalResponseContext = createContext();
export const DriverNationalResponseContext = createContext();
export const SameAsDriverContext = createContext();

const VerifyResponseProvider = (props) => {
  const [applicationDependency, setApplicationDependency] = useState("");
  const [driverResponse, setDriverResponse] = useState("");
  const [companyResponse, setCompanyResponse] = useState("");
  const [nationalResponse, setNationalResponse] = useState("");
  const [user_applicant_id, setUser_applicant_id] = useState("");
  const [same_as_driver, setSame_as_driver] = useState(false);

  return (
    <>
      <ApplicationDependencyContext.Provider
        value={{ applicationDependency, setApplicationDependency }}
      >
        <UserApplicantIDContext.Provider
          value={{ user_applicant_id, setUser_applicant_id }}
        >
          <CompanyResponseContext.Provider
            value={{ companyResponse, setCompanyResponse }}
          >
            <NationalResponseContext.Provider
              value={{ nationalResponse, setNationalResponse }}
            >
              <DriverNationalResponseContext.Provider
                value={{ driverResponse, setDriverResponse }}
              >
                <SameAsDriverContext.Provider
                  value={{ same_as_driver, setSame_as_driver }}
                >
                  {props.children}
                </SameAsDriverContext.Provider>
              </DriverNationalResponseContext.Provider>
            </NationalResponseContext.Provider>
          </CompanyResponseContext.Provider>
        </UserApplicantIDContext.Provider>
      </ApplicationDependencyContext.Provider>
    </>
  );
};

export default VerifyResponseProvider;
