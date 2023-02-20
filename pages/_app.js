import "../styles/globals.css";
import Login from "../pages/login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

function MyApp({ Component, pageProps }) {
  const [loggedInUser, loading, _error] = useAuthState(auth);

  if (loading) return <h1>Loading....</h1>;

  if (!loggedInUser) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
