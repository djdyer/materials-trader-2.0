import React, { useState } from "react";

// import { useQuery, useMutation } from "@apollo/client";

// const API_KEY = "AIzaSyD-RuWSCkmZwh_RKF5GZKhWWkbbwVKkrdQ";

// const address = document.getElementById("location").innerHTML;
// console.log("address:", address);

// async function mapApiCall() {
//   try {
//     let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

//     const response = await fetch(url);

//     console.log({ response });
//     const data = await response.json();
//     console.log({ data });
//     let coords = {
//       lat: data.results[0].geometry.location.lat,
//       lng: data.results[0].geometry.location.lng,
//     };
//     console.log({ coords });
//     return coords;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function initMap() {
//   const coords = await mapApiCall();

//   map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(coords.lat, coords.lng),
//     zoom: 10,
//   });
// }

function ListingDetail({ listing }) {
  const pathArray = window.location.pathname.split("/");
  const listingId = pathArray[pathArray.length - 1];

  // FROM FLY APP
  // const {
  //   loading,
  //   data,
  //   refetch: refechListing,
  // } = useQuery(QUERY_LISTING, {
  //   variables: { _id: listingId },
  // });
  // const listingData = data?.listing || {};

  return (
    <section className="detail">
      <div className="title_header">
        <h3 id="material">{listing.material.type}</h3>
        <h3 id="city">{listing.location}</h3>
      </div>
      <div id="material_image_container">
        <img
          id="post-image"
          alt="listing-upload"
          src={`/images/${listing.material.type}-upload.jpeg`}
        />
      </div>
      <div className="content_body">
        <div>
          <h3 className="post_title">DESCRIPTION:</h3>
          <h4 id="description">{listing.description}</h4>
          <h3 className="post_title">AMOUNT:</h3>
          <h4 id="amount">{listing.amount}</h4>
          <h3 className="post_title">LOCATION:</h3>
          <h4 id="location">{listing.location}</h4>
          <h3 className="post_title">CONTACT:</h3>
          <div id="contact">
            <h4>
              <b>{listing.user.username}</b>
            </h4>
            <h4>{listing.contact}</h4>
          </div>
        </div>
        <div id="map"></div>
      </div>
    </section>
  );
}

export default ListingDetail;
