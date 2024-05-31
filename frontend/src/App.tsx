import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col justify-between items-center px-16 h-full">
      <Header />
      <main>
        <p className="">Headphones- MERN stack eCommerce App</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
