import React, { useEffect } from "react";
import { useContext, useState } from "react";

export const StateContext = React.createContext();

export function StateProvider({children}) {

    const [totalUsers,setTotalUsers]=useState();
    const[tolatStores,setTotalStores]=useState();
    const [totalRatings,setTotalRatings]=useState();
    const token = localStorage.getItem("authToken");


    const getRatings = async () => {
      const response = await fetch("http://localhost:7000/api/ratings/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      const data = await response.json();
      // console.log(data);
      setTotalRatings(data.length)
    };
    useEffect(() => {
      getRatings();
    }, []);

  return (
    <StateContext.Provider value={{ totalUsers,setTotalUsers,tolatStores,setTotalStores,totalRatings,setTotalRatings }}>
      {children}
    </StateContext.Provider>
  );
}

export const useGlobleState=()=>{return useContext(StateContext)};

