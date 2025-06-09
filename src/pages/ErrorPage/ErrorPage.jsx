import { useRouteError } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import '../ErrorPage/ErrorPage.css'
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Header />
      <main className="error-container">
        <h1>Oops! Page not Found</h1>
        <p>{error.statusText || error.message}</p>
        <p>Código: {error.status || "Erro"}</p>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
