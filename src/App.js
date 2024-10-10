import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "./Action/Action";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector((state) => state.DataReducer);
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  return allTickets ? (
    <div >
      <Navbar />
      <hr/>
      <Dashboard />
    </div>
  ) : (
    <Loader />
  );
};

export default App;
