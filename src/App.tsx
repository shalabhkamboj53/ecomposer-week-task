import { useEffect } from "react";
import "./App.css";
import RouteMap from "./routemap";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const ErrorFallback = () => (
    <div role="alert">
      <p>Something went wrong &nbsp;&nbsp;&nbsp; ; (</p>
    </div>
  );

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }, 1000);
  }, []);

  return (
    <>
      <ReactErrorBoundary FallbackComponent={ErrorFallback}>
        <RouteMap />
      </ReactErrorBoundary>
    </>
  );
}

export default App;
