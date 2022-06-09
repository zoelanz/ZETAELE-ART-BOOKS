// function OrderNumber() {

  
//   const [order, setorder] = useState([]);
//   const orderNumber=order.lenght+1

//   useEffect(() => {
//     const db = getFirestore();
//     const queryCollection = collection(db, "Purchase Order");
//     getDocs(queryCollection)
//       .then((resp) => setorder(resp.docs))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h1>GRACIAS POR SU COMPRA!</h1>
//       <h2>numero de pedido:{orderNumber} </h2>
//     </div>
//   );
// }

// export default OrderNumber;
