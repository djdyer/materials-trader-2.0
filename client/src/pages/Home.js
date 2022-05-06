import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_LISTINGS} from "../utils/queries";

function Home() {
  const { loading, data } = useQuery(QUERY_LISTINGS);
  console.log(data)

  return <div>{}</div>;
}

export default Home;
