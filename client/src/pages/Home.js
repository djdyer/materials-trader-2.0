import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS } from "../utils/queries";
import Listing from "../components/Listing";

function Home() {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  console.log(data);

  return (
    <>
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <div>
          <h1>LISTING DATA</h1>
          <Listing listingData={data} />
        </div>
      )}
    </>
  );
}

export default Home;
