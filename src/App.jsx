import { Outlet, useRouteError, isRouteErrorResponse } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import './index.css'

const App = () => {
  const error = useRouteError();

  if (error && isRouteErrorResponse(error)) {
    return (
      <>
        <Header />
        <ErrorPage error={error} />
        <Footer />
      </>
    );
  }

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
