import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/ui/Card";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col justify-between items-center  h-full">
      <Header />
      <main className="p-8 flex flex-col justify-start items-center">
        <Home/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
