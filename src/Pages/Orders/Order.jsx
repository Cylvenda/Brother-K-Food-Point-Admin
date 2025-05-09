// import React, { useEffect, useState } from 'react'
// import './order.css'
// import axios from 'axios';
// import { toast } from 'react-toastify';
import { assets } from "../../assets/assets"

// const Order = ({ URL }) => {

//   const [orders, setOrders] = useState([]);

//   const fetchAllOrders = async () => {

//     const response = await axios.get(URL + "/api/order/list");

//     if (response.data.success) {
//       setOrders(response.data.data)
//     } else {
//       toast.error("Error")
//     }

//   }

//   useEffect(() => {
//     fetchAllOrders();
//   }, [])

//   return (

//       <div className='order add'>
//         <h3>Order Page</h3>
//         <div className="order-list">
//           {orders.map((order, index) => {
//             <>
//               <div key={index} className="order-item">
//                 <img src={assets.order} alt="" />
//               </div>
//               <div>
//                 <p className='order-item-food'>
//                   {order.items.map((item, index) => {
//                     if (index === order.items.length - 1) {
//                       return item.name + " x " + item.quantity
//                     } else {
//                         return item.name + " x " + item.quantity + ', '
//                     }
//                   })}
//                   <p className='order-item-name'>
//                       {order.address.firstName+ " "+ order.address.lastName}
//                   </p>
//                 </p>
//               </div>
//             </>
//           })}
//         </div>

//       </div>
//   )
// }

// export default Order

import React, { useEffect, useState } from 'react'
import './order.css'
import axios from 'axios';
import { toast } from 'react-toastify';


const Order = ({ URL }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrder = async () => {

    const response = await axios.get(URL + "/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data)
    } else {
      toast.error("Error");
    }
  }

  useEffect(() => {

    fetchAllOrder()

  }, [])

  return (

    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((Orderitems, index) => {
          <>
            <div key={index} className="order-item">
              <img src={assets.order} alt="" />
            </div>
            <div>
              <p className='order-item-food'>
                {Orderitems.items.map((item, index) => {
                  if (index === Orderitems.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
                <p className='order-item-name'>
                  {Orderitems.address.firstName + " " + Orderitems.address.lastName}
                </p>
              </p>
            </div>
          </>
        })}
      </div>

    </div>
  )
}

export default Order
