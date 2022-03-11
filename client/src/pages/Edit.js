import React from "react";

// EDIT

// async function editFormHandler(event) {
//   event.preventDefault()
//   const description = document.querySelector('#material-description').value
//   const amount = document.querySelector('#material-amount').value
//   const location = document.querySelector('#material-location').value
//   const contact = document.querySelector('#material-contact').value
//   const listing_id = document.querySelector("#hiddenListing").value;

//   const response = await fetch(`/api/users/updatelisting/${listing_id}`, {
//     method: 'PUT',
//     body: JSON.stringify({
//       // material,
//       // photo,
//       listing_id,
//       description,
//       amount,
//       location,
//       contact,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   if (response.ok) {
//     document.location.replace('/profile')
//   } else {
//     alert('Failed to edit listing')
//   }
// }

// document.querySelector('#saveBtn').addEventListener('click', editFormHandler);

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

export default function Edit() {
  return (
    <>
      <form className="create">
        <div className="title_header">
          <h3>EDIT LISTING</h3>
        </div>
        <div className="form_body">
          <div>
            <input
              type="hidden"
              id="hiddenListing"
              name="listing_id"
              value={listing.id}
            ></input>

            <h3 className="post_title">DESCRIPTION:</h3>
            <textarea id="material-description">{listing.description}</textarea>

            <h3 className="post_title">AMOUNT:</h3>
            <textarea id="material-amount">{listing.amount}</textarea>

            <h3 className="post_title">LOCATION:</h3>
            <input id="material-location" value={listing.location}></input>

            <h3 className="post_title">CONTACT:</h3>
            <input id="material-contact" value={listing.contact}></input>
          </div>

          <button type="click" id="saveBtn">
            <h3>SAVE</h3>
          </button>

          <button type="click" id="deleteBtn">
            <h3>DELETE</h3>
          </button>
        </div>
      </form>
    </>
  );
}

// <script src="../js/edit.js"></script>
// <script src="../js/delete.js"></script>
