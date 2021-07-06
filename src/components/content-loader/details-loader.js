import React from "react"
import ContentLoader from "react-content-loader"

export const DetailsImageLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-27" y="-18" rx="0" ry="0" width="576" height="477" />
  </ContentLoader>
)


export const DetailsLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={400}
      height={400}
      viewBox="0 0 400 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="4" y="17" rx="0" ry="0" width="190" height="48" /> 
      <rect x="4" y="78" rx="0" ry="0" width="67" height="35" /> 
      <rect x="5" y="125" rx="0" ry="0" width="168" height="53" /> 
      <rect x="3" y="193" rx="0" ry="0" width="456" height="81" /> 
      <rect x="5" y="298" rx="0" ry="0" width="332" height="51" />
    </ContentLoader>
  )