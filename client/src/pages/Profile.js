import React, { useState } from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

// DELETE
// async function deleteHandler(event) {
//   event.preventDefault();

//   const listing_id = document.querySelector("#hiddenListing").value;

//   const response = await fetch(`/api/users/deletelisting/${listing_id}`, {
//     method: "DELETE",
//     body: JSON.stringify({
//       listing_id,
//     }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     document.location.replace("/profile");
//   } else {
//     alert("Failed to delete listing");
//   }
// }

// var deleteAll = document.querySelectorAll(".delete");
// for (var i = 0; i < deleteAll.length; i++) {
//   console.log(deleteAll[i]);
//   deleteAll[i].addEventListener("click", deleteHandler);
// }

function Profile({ listing, username }) {
  const trashcan = require("../../src/assets/icons/navigation/trash.png");

  const { loading, data, error, refetch: refechMe } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  return (
    <>
      {loading ? null : (
        <div className="dash">
          <div className="title_header">
            <h3>{username}</h3>
            <a onClick={() => Auth.logout()} id="logout" href="/logout">
              <h3>LOGOUT</h3>
            </a>
          </div>
          <div className="dash_body">
            <div id="your_posts">
              <h4>Your posts:</h4>
            </div>

            <div className="user_posts">
              <input
                type="hidden"
                id="hiddenListing"
                name="listing_id"
                value={listing.id}
              ></input>

              {/* SELECT USER POST TO ROUTE TO EDIT VIEW  */}
              <a href={`/editlisting/${listing.id}`}>
                <h3 className="post_title">{listing.amount}</h3>
                <h5 id="post_date">{listing.createdAt}</h5>
              </a>

              {/* DELETE BUTTON */}
              <div id="trashcan">
                <button className="delete" id="deleteBtn" type="click">
                  <img id="trashcan-icon" alt="deletePost" src={trashcan} />
                </button>
              </div>
            </div>

            {/* GO TO CREATE FORM */}
            <a href="/newlisting">
              <button
                className="create"
                action="/api/users/createlisting"
                method="get"
                type="click"
                id="createBtn"
              >
                <h3>LIST RECYCLABLES</h3>
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
