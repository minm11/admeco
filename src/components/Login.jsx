import React, { useState } from "react";
import supabase from "../supabaseClient";
import { loginRequest } from "./auth";
import { Link } from "react-router-dom";
import {
  BiChevronRight,
  BiFilter,
  BiErrorAlt,
  BiSolidGroup,
} from "react-icons/bi";
import { isVisible } from "@testing-library/user-event/dist/utils";

export default function Login({ msalinstance, openLogin, setOpenLogin, setUser, setUserAzure }) {
  async function authen(user) {
    const { data: admin } = await supabase.from("admin").select();
    
    if (admin) {
      for (let index = 0; index < admin.length; index++) {
        if (admin[index].adminEmail = user.username) {
            setUser(admin)
            setUserAzure(loginResponse) 
       }
      }
    }
  }
  

  var loginResponse;
  const loginAZURE = async () => {
    try {
      loginResponse = await msalinstance.loginPopup(loginRequest);
      authen(loginResponse.account);
    } catch (error) {
      console.error("Authentication error", error);
    }
  };

  if (!openLogin) return null;
  return (
    <div
      id="main"
      className="fixed inset-0 items-center justify-center place-content-center 
        bg-black bg-opacity-10 backdrop-blur-md flex font-lato w-full"
    >
      <div className=" bg-white h-56 w-80 rounded-md shadow-[#0000009f] shadow-md ">
        <button onClick={() => loginAZURE()}>login with loginAZURE</button>
        <button onClick={() => setOpenLogin(!openLogin)}>x</button>
      </div>
    </div>
  );
}
