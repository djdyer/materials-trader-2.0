import React from "react";


// Create a post 
// async function createListing(event) {
//   event.preventDefault()

  // Accept title and content
  // const material_id = document.querySelector('#material-selection').value
  // const photo = document.querySelector('#photo-upload');
  // const description = document.querySelector('#material-description').value
  // const amount = document.querySelector('#material-amount').value
  // const location = document.querySelector('#material-location').value
  // const contact = document.querySelector('#material-contact').value

  // ID on where the image goes
  // id="post_image"

  // if (material_id && description && amount && location && contact) {
  //   const response = await fetch('/api/users/createlisting', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       material_id,
  //       photo,
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
  //     alert('Failed to create listing')
  //   }
  // }


// document.querySelector('.create').addEventListener('click', createListing)



function Create() {
  return (
    <>
      <form className="create">
        <div className="title_header">
          <h3>LIST RECYCLEABLES</h3>
        </div>
        <div className="form_body">
          <div>
            <h3 className="post_title">MATERIAL:</h3>

            {/* DROPDOWN TO CHOOSE MATERIAL FOR POST  */}
            <select
              placeholder="choose material"
              name="material_id"
              id="material-selection"
            >
              <option value="{materials.[0].id}">{materials.[0].type}</option>
        <option value={materials.[1].id}>{materials.[1].type}</option>
        <option value={materials.[2].id}>{materials.[2].type}</option>
        <option value={materials.[3].id}>{materials.[3].type}</option>
        <option value={materials.[4].id}>{materials.[4].type}</option>
        <option value={materials.[5].id}>{materials.[5].type}</option>
        <option value={materials.[6].id}>{materials.[6].type}</option>
        <option value={materials.[7].id}>{materials.[7].type}</option>
        <option value={materials.[8].id}>{materials.[8].type}</option>
        <option value={materials.[9].id}>{materials.[9].type}</option>
        <option value={materials.[10].id}>{materials.[10].type}</option>
            </select>

            <h3 className="post_title">PHOTO:</h3>
            <input type="file" id="photo-selection photo-upload"></input>

            <h3 className="post_title">DESCRIPTION:</h3>
            <textarea
              name="description"
              placeholder="Describe your listing..."
              id="material-description"
            ></textarea>

            <h3 className="post_title">AMOUNT:</h3>
            <textarea
              name="amount"
              placeholder="How much material do you have?"
              id="material-amount"
            ></textarea>

            <h3 className="post_title">LOCATION:</h3>
            <input
              name="location"
              placeholder="Please provide full address OR city and state."
              id="material-location"
            ></input>

            <h3 className="post_title">CONTACT:</h3>
            <input
              name="contact"
              placeholder="Please provide preferred contact phone number or email..."
              id="material-contact"
            ></input>
          </div>
          <button type="click" id="createBtn">
            <h3>LIST RECYCLEABLES</h3>
          </button>
        </div>
      </form>
    </>
  );
}

export default Create;
