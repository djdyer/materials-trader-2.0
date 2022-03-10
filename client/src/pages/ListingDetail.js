// import React, { useState } from "react";

// import { useQuery, useMutation } from "@apollo/client";

// function ListingDetail() {
//   const plane = require("../../src/assets/icons/plane.png");
//   const pathArray = window.location.pathname.split("/");
//   const auctionId = pathArray[pathArray.length - 1];
//   const { loading, data, refetch : refechAuction } = useQuery(QUERY_AUCTION, {
//     variables: { _id: auctionId },
//   });
//   const auctionData = data?.auction || {};

//   return (
//     <div>
//       {loading ? (
//         null
//       ) : (
//         <div className="auction">
//           <div className="auctionDetail fade-in">
//             <div id="myPlane">
//               <img
//                 alt="plane"
//                 className="plane"
//                 src={`/images/planes/${auctionData.image}`}
//               />
//             </div>

//             <div id="auctionHeader">
//               <div id="trip">
//                 <h2>{auctionData.origin}</h2>
//                 <img className="planeIcon" alt="plane icon" src={plane} />
//                 <h2>{auctionData.destination}</h2>
//               </div>
//               <div id="timerBlock">
//                 <h2>CLOSING:</h2>
//                 <div id="countdown">
//                   <Timer auctionEndDate={+auctionData.auctionEndDate} refechAuction={refechAuction} />
//                 </div>
//               </div>
//             </div>
//             <AuctionMap />
//             <div id="auctionBody">
//               <div className="auctionBodyColumn">
//                 <div className="auctionRow">
//                   <h3>Date:</h3>
//                   {new Date(+auctionData.flightDate).toLocaleDateString()}
//                 </div>
//                 <div className="auctionRow">
//                   <h3>Time:</h3>
//                   {new Date(+auctionData.flightDate).toLocaleTimeString()}
//                 </div>
//                 <div className="auctionRow">
//                   <h3>Aircraft:</h3>
//                   {auctionData.aircraft}
//                 </div>

//                 <div className="auctionRow">
//                   <h3>Flight Num:</h3>
//                   {auctionData.flightNum}
//                 </div>

//                 <div className="auctionRow">
//                   <h3>Cabin Size:</h3>
//                   {auctionData.cabinSize}
//                 </div>

//                 <div className="auctionRow">
//                   <h3>Operator:</h3>
//                   {auctionData.operator}
//                 </div>
//               </div>
//               <div className="auctionBodyColumn">
//                 <div className="leadingBidContainer">
//                   Leading Bid:
//                   <div id="leadingBid">
//                     <h2>${auctionData.currentBid}</h2>
//                   </div>
//                 </div>
//                 <div className="termsContainer">
//                   <input type="checkbox" id="termsConfirm"></input>
//                   <h3>
//                     Agree to <a href="/termsandcondtions">Terms+Conditions</a>
//                     {auctionData.termsConfirm}
//                   </h3>
//                 </div>
//                 <div className="serviceContainer">
//                   Service Detail:
//                   <a id="addServiceLink" href="/servicedetail">
//                     Read More
//                   </a>
//                 </div>
//                 <li>In-flight attendence available.</li>
//                 <li>Bar stocked with non-alcoholic beverages.</li>
//               </div>
//             </div>
//             <AuctionButton auctionData={auctionData} refechAuction={refechAuction} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ListingDetail;

//================================================================

// {
/* <section class="detail">
  <div class="title_header">
    <h3 id="material">
      {{listing.material.type}}
    </h3>
    <h3 id="city">
      {{listing.location}}
    </h3>
  </div>
  <div id="material_image_container">
    <img id="post-image" src="/images/{{listing.material.type}}-upload.jpeg" />
  </div>
  <div class="content_body">
    <div>
      <h3 class="post_title">
        DESCRIPTION:
      </h3>
      <h4 id="description">
        {{listing.description}}
      </h4>
      <h3 class="post_title">
        AMOUNT:
      </h3>
      <h4 id="amount">
        {{listing.amount}}
      </h4>
      <h3 class="post_title">
        LOCATION:
      </h3>
      <h4 id="location">
        {{listing.location}}
      </h4>
      <h3 class="post_title">
        CONTACT:
      </h3>
      <div id="contact">
        <h4>
          <b>
            {{listing.user.username}}
          </b>
        </h4>
        <h4>
          {{listing.contact}}
        </h4>
      </div>
    </div>
    <div id="map">
      {{! <img id='location-map' src='/images/map_test.png' /> }}
    </div>
  </div>
</section>
<script src="../js/map.js"></script>
<script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-RuWSCkmZwh_RKF5GZKhWWkbbwVKkrdQ&callback=initMap"
>
</script> */
// }
