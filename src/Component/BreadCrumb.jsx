import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Container from "./Container";

const BreadCrumb = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate()


  const location = path.split("/")[1];

  return (
    <div>
      <Container>
        <div className="flex gap-4 capitalize">
          <h5 onClick={()=> navigate("/")} className="cursor-pointer">Home</h5>
          <h5>/</h5>
          <h5>{location}</h5>
        </div>
      </Container>
    </div>
  );
};

export default BreadCrumb;
