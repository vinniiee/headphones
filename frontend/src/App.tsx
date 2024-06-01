import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col justify-between items-center bg-white h-full">
      <Header />
      <main className="p-8 flex flex-col justify-start items-center">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
