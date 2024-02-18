import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { OrderProvider } from "./Context/OrdersContext";
import ClientsOrders from "./Pages/ClientsOrders/ClientsOrders";
import FormOrders from "./Pages/FormOrders/FormOrders";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Title from "./Components/Title/Title";

function App() {
  return (
    <OrderProvider>
      <Router>
        <Header />
        <Title />
        <Routes>
          <Route path="/" element={<ClientsOrders />} />
          <Route path="/pedido" element={<FormOrders />} />
        </Routes>
        <Footer />
      </Router>
    </OrderProvider>
  );
}

export default App;
