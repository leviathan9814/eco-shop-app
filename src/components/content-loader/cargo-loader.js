import React from "react"
import ContentLoader from "react-content-loader"

import "./content-loader.css";

const CargoLoader = (props) => (
  <ContentLoader 
    className="loader"
    speed={2}
    width={260}
    height={360}
    viewBox="0 0 260 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
    <rect x="1" y="7" rx="0" ry="0" width="260" height="260" /> 
  </ContentLoader>
)

export default CargoLoader;