import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}


{/* <div>My Post: {params.slug}</div> */}