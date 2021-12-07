import React from "react";
import CabinetUser from "./CabinetUser/CabinetUser";
import CabinetDoctor from "./CabinetDoctor/CabinetDoctor"
import { useAppSelector } from "../../hooks";

const Cabinet = () => {

  const roleName = "Patient"
  switch (roleName) {
    case "Patient":
      return <CabinetUser />;
    // case "Doctor":
    //   return <CabinetDoctor />;
  }
};

export default Cabinet;
