import React from "react";
import CabinetUser from "./CabinetUser/CabinetUser";
import CabinetDoctor from "./CabinetDoctor/CabinetDoctor";

const Cabinet = () => {
  const role = "Patient";
  switch (role) {
    case "Patient":
      return <CabinetUser />;
    case "Doctor":
      return <CabinetDoctor />;
  }
};

export default Cabinet;
