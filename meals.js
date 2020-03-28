const numItemsToGenerate = 20; //how many gallery items you want on the screen
const numImagesAvailable = 3400; //how many total images are in the collection you are pulling from
const collectionID = 597305; //the collection ID from the original url
const $galleryContainer = document.querySelector('.cards');

function renderGalleryItem(randomNumber){
  fetch(`https://source.unsplash.com/collection/${collectionID}/?sig=${randomNumber}`) 
    .then((response)=> {    
      let galleryItem = document.createElement('div');
      galleryItem.classList.add('card');
      galleryItem.innerHTML = `
        <img src="${response.url}" alt="" class="card-img"/>
        <div class="card-content">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus necessitatibus et explicabo alias.
            </p>
            <p>
                Iure repudiandae velit ipsum odio aliquid earum animi debitis reprehenderit est at excepturi voluptas id adipisci sapiente!
            </p>
        </div>
        <div class="card-info">
            <div>
                <i class="fas fa-thumbs-up"></i>310
            </div>
            <div>
                <a href="#" class="card-link">View Article</a>
            </div>
        </div>
      `
      $galleryContainer.appendChild(galleryItem);
    })
}

for(let i=0;i<numItemsToGenerate;i++){
  let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
  renderGalleryItem(randomImageIndex);
}