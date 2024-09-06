import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ActivePageProvider from "./dashboard/context/ActivePageContext";
import AdminActivePageProvider from "./adminDashboard/contexts/AdminActivePageContext";
import { SnackbarUtilsConfigurator } from "./utils/snackbarUtils";
import { SnackbarProvider } from "notistack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FetchApplicationProvider } from "./UtilFunctions/FetchApplications";
import { FetchTransactionProvider } from "./UtilFunctions/FetchTransactions";

// Create a custom theme with a high z-index for SnackbarContent
const theme = createTheme({
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          zIndex: 100000000, // Set the desired z-index here
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <SnackbarUtilsConfigurator />
        <Router>
          <AdminActivePageProvider>
            <FetchApplicationProvider>
              <FetchTransactionProvider>
                <ActivePageProvider>
                  <App />
                </ActivePageProvider>
              </FetchTransactionProvider>
            </FetchApplicationProvider>
          </AdminActivePageProvider>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
