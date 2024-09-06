import { createContext, useState } from "react";

export const CategoryIDContext = createContext();
export const IdentifierContext = createContext();
export const InitialPromptContext = createContext();
export const SuccessPromptContext = createContext();
export const ApplyModalContext = createContext();
export const ApplicationTypeContext = createContext();
export const UserVerifyObjectContext = createContext();
export const DriverVerifyObjectContext = createContext();
export const CurrentIdentifierContext = createContext();
// export const EntityTypeContext = createContext();

const ApplicationProvider = (props) => {
  const [cateID, setCateID] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [currIdentifier, setCurrIdentifier] = useState("");
  const [makeModalVisible, setMakeModalVisible] = useState(false);
  const [applicationType, setApplicationType] = useState("");
  const [userVerifyObject, setUserVerifyObject] = useState(null);
  const [driverVerifyObject, setDriverVerifyObject] = useState(null);
  // const [entityType, setEntityType] = useState("");
  const [makeInitialPromptVisible, setMakeInitialPromptVisible] =
    useState(false);
  const [successModal, setSucessModal] = useState(false);

  return (
    <>
      <SuccessPromptContext.Provider value={{ successModal, setSucessModal }}>
        <InitialPromptContext.Provider
          value={{ makeInitialPromptVisible, setMakeInitialPromptVisible }}
        >
          <CurrentIdentifierContext.Provider
            value={{ currIdentifier, setCurrIdentifier }}
          >
            <ApplicationTypeContext.Provider
              value={{ applicationType, setApplicationType }}
            >
              <CategoryIDContext.Provider value={{ cateID, setCateID }}>
                <IdentifierContext.Provider
                  value={{ identifier, setIdentifier }}
                >
                  <UserVerifyObjectContext.Provider
                    value={{ userVerifyObject, setUserVerifyObject }}
                  >
                    <DriverVerifyObjectContext.Provider
                      value={{ driverVerifyObject, setDriverVerifyObject }}
                    >
                      {/* <EntityTypeContext.Provider value={{ entityType, setEntityType }}> */}
                      <ApplyModalContext.Provider
                        value={{ makeModalVisible, setMakeModalVisible }}
                      >
                        {props.children}
                      </ApplyModalContext.Provider>
                      {/* </EntityTypeContext.Provider> */}
                    </DriverVerifyObjectContext.Provider>
                  </UserVerifyObjectContext.Provider>
                </IdentifierContext.Provider>
              </CategoryIDContext.Provider>
            </ApplicationTypeContext.Provider>
          </CurrentIdentifierContext.Provider>
        </InitialPromptContext.Provider>
      </SuccessPromptContext.Provider>
    </>
  );
};

export default ApplicationProvider;
