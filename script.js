// Unsplash API
const count = 10;
const apiKey='N51eWblmQmkv2NjxqmWw0HVqR_BVZzvURtLKvNUYtWM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Helper Function to Set Attributes on DOM Elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attribute[key]);
  }
}

//Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  //Run function for each object in photosArray
  photosArray.forEach((photo) => {
       //Create <a> to link to Unsplash
       const item = document.createElement('a');
      setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
      });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Put <img> inside <a>, then put both inside container element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
    try{
   const response = await fetch(apiUrl);
   photosArray = await response.json();
   displayPhotos();
    }
    catch(error) {
      console.log("There was an error.")
    }
}



// On Load
getPhotos();
