import React from "react";
import { Link } from "react-router-dom";

function Listing({ listingData }) {
  console.log("listing", listingData);

  return (
    <>
      {listingData.listings.map((listing) => (
        <Link key={listing._id} to="/listing/{listing.id}">
          <div id="listing">
            <section>
              <div className="post_header">
                <h3 id="material">{listing.material}</h3>
                <h3 id="city">{listing.location}</h3>
              </div>

              <div className="content_body">
                <img
                  className="post_image"
                  src={`/images/${listing.material}-upload.jpeg`}
                />
                <div className="content">
                  <div>
                    <h4>
                      <b>Description:</b>
                    </h4>
                    <h4 id="description">{listing.description}</h4>
                  </div>
                  <div>
                    <h4 id="amount-text">
                      <b>Amount:</b>
                    </h4>
                    <h4 id="amount">{listing.amount}</h4>
                  </div>
                  <div className="user_date">
                    <h5 id="username">{listing.user_Id.userName}</h5>
                    <h5 id="date">{listing.createdAt}</h5>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Listing;
