import { collection, getDocs } from "firebase/firestore";
import db from "./Firebase";
import { useState } from "react";
import { useEffect } from "react";

const FetchOrder = () => {
    const [orders, setOrders] = useState ([]);

  useEffect(() => {
    const ordersRef = collection(db, "Pedidos");

    getDocs(ordersRef).then((resp) => {
      setOrders(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, []);

  return orders;
};

export default FetchOrder;
