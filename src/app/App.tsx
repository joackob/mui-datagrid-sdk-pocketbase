import Layout from "@/src/layout/Layout";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@/src/store/store";
import { ReactNode } from "react";

const App = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Layout>{children}</Layout>
    </Provider>
  );
};

export default App;
