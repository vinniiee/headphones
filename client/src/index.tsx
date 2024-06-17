import React from "react";
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/bootstrap.custom.css";
import "./styles/index.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import ProductShow from "./pages/ProductShow";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import AdminRoute from "./components/AdminRoute";
import AllOrders from "./pages/admin/AllOrders";
import AllProducts from "./pages/admin/AllProducts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<Home />} />
      <Route path="/cart" index={true} element={<Cart />} />
      <Route path="/products/:id" index={true} element={<ProductShow />} />
      <Route path="/login" index={true} element={<Login />} />
      <Route path="/register" index={true} element={<Register />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="/shipping" index element={<Shipping />} />
        <Route path="/payment" index element={<Payment />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orders/all" element={<AllOrders />} />
        <Route path="/admin/products/my" element={<AllProducts />} />
        <Route path="/admin/users/all" element={<AllOrders />} />
      </Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider
        deferLoading={true}
        options={{ "client-id": "test" }}
      >
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
