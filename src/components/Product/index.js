import React from "react";
import Info from "../../Assets/stackline_frontend_assessment_data_2021.json";
import ProductTags from "../ProductTags";
import './style.css'

export default function Product() {
  return (
      <>
      {Info.map((data) => {
        return (
          <div className="product-container" key={data.id}>
            <img src={data.image} alt='product-img'/>
            <h3>{data.title}</h3>
            <p>{data.subtitle}</p>
            <hr></hr>
            <ProductTags />
            <hr></hr>
          </div>
        );
      })}
      </>
  );
}
