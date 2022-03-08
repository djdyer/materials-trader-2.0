// import React, { useState } from "react";
// import Auth from "../utils/auth";
// import { useQuery} from "@apollo/client";
// import { QUERY_ME } from "../utils/queries";
// import Profilewatchlist from "../components/Profilewatchlist"

// function Profile() {
//   const notificationsList = require("../../src/assets/icons/notificationslist.png");
//   const settingsList = require("../../src/assets/icons/settingslist.png");
//   const paymentsList = require("../../src/assets/icons/paymentslist.png");
//   const documentsList = require("../../src/assets/icons/documentslist.png");
//   const userImg = require("../../src/assets/icons/loaduser.png");
//   const plus = require("../../src/assets/icons/plus.png");
//   const plusHover = require("../../src/assets/icons/plus2.png");

//   const { loading, data, error, refetch: refechMe } = useQuery(QUERY_ME);
//   const userData = data?.me || {};

//   return (
//     <>
//       {loading ? (
//         null
//       ) : (
//         <div className="profile">
//           <div className="profileDetail fade-in">
//             <h2>Profile</h2>
//             <header>
//               <div className="profileColumn">
//                 <a>
//                   <img
//                     id="addUserImg"
//                     className="icon default"
//                     alt="plus"
//                     src={plus}
//                   />
//                   <img
//                     id="addUserImg2"
//                     className="icon hover"
//                     alt="plus hover"
//                     src={plusHover}
//                   />
//                 </a>
//                 <img id="userImg" alt="userImg" src={userImg} />
//               </div>
//               <div className="profileColumn">
//                 <h5>Name: </h5>
//                 <h5>Email: </h5>
//                 <h5>Home City:</h5>
//                 <div id="profileLinks">
//                   <a href="/editprofile">
//                     <h6>Edit Profile</h6>
//                   </a>
//                   <a href="/signup">
//                     <h6>Update Password</h6>
//                   </a>
//                   <a href="/" onClick={() => Auth.logout()}>
//                     <h6>Logout</h6>
//                   </a>
//                 </div>
//               </div>
//               <div className="profileColumn">
//                 <h3>{userData.firstName}</h3>
//                 <h3>{userData.email}</h3>
//                 <h3>{userData.homeCity}</h3>
//               </div>
//             </header>
//             <div>
//               <div className="profileBlock">
//                 <div className="profileBlockHeader">
//                   <img alt="notificationslist" src={notificationsList} />
//                   <h3>Winning Bids</h3>
//                 </div>
//                 {userData.winingAuctions.map((auction) => {
//                   return (
//                     <div key={auction._id} className="profileOpenBids">
//                       <a href={`auctiondetail/${auction._id}`}>
//                         {" "}
//                         <h2>
//                           {" "}
//                           From: {auction.origin} To: {auction.destination}{" "}
//                         </h2>
//                       </a>
//                     </div>
//                   );
//                 })}
//               </div>

//               <Profilewatchlist userData={userData} refechMe={refechMe}/>

//               <div className="profileBlock">
//                 <div className="profileBlockHeader">
//                   <img alt="settingsPreference" src={settingsList} />
//                   <h3>Settings</h3>
//                 </div>
//               </div>

//               <div className="profileBlock">
//                 <div className="profileBlockHeader">
//                   <img alt="paymentlist" src={paymentsList} />
//                   <h3>Payment</h3>
//                 </div>
//               </div>

//               <div className="profileBlock">
//                 <div className="profileBlockHeader">
//                   <img alt="documents" src={documentsList} />
//                   <h3>Documents</h3>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Profile;

// =============================================

{
  /* <div class="dash">
    <div class="title_header">
        <h3>{{username}}</h3>
        <a id="logout" href="/logout">
          <h3>LOGOUT</h3>
        </a>
    </div>
    <div class="dash_body">
      <div id="your_posts">
        <h4>Your posts:</h4>
      </div>

    {{#if listings.length}}
    {{#each listings as |listing|}}
      <div class="user_posts">

        <input type="hidden" id="hiddenListing" name='listing_id' value='{{listing.id}}'></input>
        
        {{!-- SELECT USER POST TO ROUTE TO EDIT VIEW --}} 
        <a href="/editlisting/{{listing.id}}">
          <h3 class="post_title">{{listing.amount}}</h3>
          <h5 id="post_date">{{format_date listing.createdAt}}</h5>
        </a>

        {{!-- DELETE BUTTON  --}}
        <div id="trashcan">
          <button class="delete" id="deleteBtn" 
          type="click">
              <img id="trashcan-icon" src="../images/trashcan.png"/>
          </button>
        </div>
      </div>
    {{/each}}
    {{/if}}
   
    {{!-- GO TO CREATE FORM --}}
      <a href="/newlisting">
        <button class="create" 
        {{!-- action="/api/users/createlisting"  --}}
        {{!-- method="get"  --}}
        type="click" id="createBtn">
           <h3>LIST RECYCLABLES</h3>
        </button>
      </a>

    </div>
</div>
<script src='/js/delete.js'></script>
{{!-- <script src='/js/logout.js'></script> --}} */
}
