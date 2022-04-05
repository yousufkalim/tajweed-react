import { Row, Col } from "reactstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Characters2 from "../assets/images/Characters2.svg";
import Vector2 from "../assets/images/Vector2.svg";
import { data } from "../utils/data";
import CurrentDetails from "../components/CurrentDetails";
import PaymentRecord from "../components/PaymentRecord";
import { Store, UpdateStore } from "../StoreContext";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import api from "../api/index";
const PaymentsAfterLogin = () => {
  const store = Store();
  const updateStore = UpdateStore();
  const [paymentrecords,setPaymentRecords]=useState()
  const [pendingrecords,SetPendingRecords]=useState()
  const [paidrecords,SetPaidRecords]=useState()
  let {user}=Store()
  useEffect(()=>{
    
    if(Object.keys(user).length>0){
      api("get", `/invoices/${user?._id}`)
      .then((res) => {
        setPaymentRecords(res.data.invoices)
        let pending=res.data.invoices.filter((e)=>{
          return e.status==='pending'
        })
        let paid=res.data.invoices.filter((e)=>{
          return e.status==='paid'
        })
        SetPendingRecords(pending)
        SetPaidRecords(paid)
      })
      .catch((err) => {
        toast.error(err?.response);
      });
    }
     
  },[user])
  
  
  return (
    <>
   
      <Navbar />
      {pendingrecords?.length>0&&
      <h3
        className="pt-4 p-head"
        style={{
          fontFamily: "GothicBold",
          fontSize: "40px",
          marginLeft: "7%",
        }}
      >
        Current Session
      </h3>}
        {pendingrecords?.map((item)=>{
           return <CurrentDetails record={item} />
        })}
      {paidrecords?.length>0&&<h3
        className="pt-4 p-head"
        style={{
          fontFamily: "GothicBold",
          marginLeft: "7%",
          fontSize: "40px",
        }}
      >
        Payment Record
      </h3>}
        {paidrecords?.map((item)=>{
           return <PaymentRecord record={item} />
        })}
      <Footer />
    </>
  );
};

export default PaymentsAfterLogin;
