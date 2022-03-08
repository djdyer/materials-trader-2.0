// import React from "react";

// function Listing({ listing }) {
//   const plane = require("../../src/assets/icons/plane.png");
//   const more = require("../../src/assets/icons/more.png");
//   const moreHover = require("../../src/assets/icons/more2.png");

//   return (
//     <a href={`auctiondetail/${auction._id}`}>
//       <div id="result">
//         <div id="header1">
//           <div id="trip">
//             <h2>{auction.origin}</h2>
//             <img className="planeIcon" alt="plane icon" src={plane} />
//             <h2>{auction.destination}</h2>
//           </div>

//           <div id="costDetail">
//             <h2>$ {auction.currentBid}</h2>
//             <img
//               className="icon default"
//               id="moreBtn"
//               alt="more button"
//               src={more}
//             />
//             <img
//               className="icon hover"
//               id="moreBtn"
//               alt="more button hover"
//               src={moreHover}
//             />
//           </div>
//         </div>

//         <div id="header2">
//           <h3>Flight No: {auction.flightNum}</h3>
//           <h3>Cabin Size: {auction.cabinSize}</h3>
//           <h3>{new Date(+auction.flightDate).toLocaleDateString()}</h3>
//         </div>

//         <div>
//           <img
//             alt="plane"
//             className="plane"
//             src={`/images/planes/${auction.image}`}
//           />
//         </div>
//       </div>
//     </a>
//   );
// }

// export default Listing;

// {{#each listings as |listing|}}
// <a id='listing' href="/listing/{{listing.id}}">
// <section>
//   <div class="post_header">
//     <h3 id="material">{{listing.material.type}}</h3>
//     <h3 id="city">{{listing.location}}</h3>
//   </div>
//   <div class="content_body">
//     <img class="post_image" src="/images/{{listing.material.type}}-upload.jpeg"/>
//     <div class="content">
//       <div>
//         <h4><b>Description:</b></h4>
//         <h4 id="description">{{listing.description}}</h4>
//       </div>
//       <div>
//         <h4 id="amount-text"><b>Amount:</b></h4>
//         <h4 id="amount">{{listing.amount}}</h4>
//       </div>
//     <div class="user_date">
//       <h5 id="username">{{listing.user.username}}</h5>
//       <h5 id="date">{{format_date listing.createdAt}}</h5>
//     </div>
//   </div>
// </section>
// </a>
// {{/each}}

// =======================================================

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
