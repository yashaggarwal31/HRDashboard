import React from "react";

function page({ params }: any) {
  return <div>{params.slug}</div>;
}

export default page;
