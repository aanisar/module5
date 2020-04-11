
//STEP ONE - constructor function to create main object template (like a class )
function Stay(name, img, price, rating, location, availability, features) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.availability = availability;
    this.features = features;
}

// STEP TWO - define methods on prototype property of the constructor function 

Stay.prototype.display = function() {

    let sectionHTML = document.querySelector("section");
    let articleHTML = document.createElement('article');
    let nameHTML = document.createElement('h2');
    let imgHTML = document.createElement('img');
    let priceHTML = document.createElement('p');

    nameHTML.textContent = this.name;
    imgHTML.setAttribute('src', "assets/" + this.img);
    imgHTML.setAttribute('alt', this.img);
    priceHTML.textContent = "Price: $" + this.price;

    articleHTML.appendChild(nameHTML);
    articleHTML.appendChild(imgHTML);
    articleHTML.appendChild(priceHTML);
    sectionHTML.appendChild(articleHTML);

}

Stay.prototype.available = function() {
    let availabilityHTML = document.createElement("p");
    availabilityHTML.textContent = "Available: " + this.availability;
    let section = document.querySelector('section');
    section.appendChild(availabilityHTML);
}


// STEP THREE - Create second constructor function for condo objects (like a subclass)

function Condo(name, img, price, rating, location, availability, features, floor) {
    Stay.call(this, name, img, price, rating, location, availability, features);
    this.floor = floor;
}

// STEP FOUR - let condo methods inherit from Stay 

Condo.prototype = Object.create(Stay.prototype);

Object.defineProperty(Condo.prototype, 'constructor', {
    value: 'Condo',
    enumerable: false,
    writable: true
});

//STEP 4.5 - display the condo details spefically when the user click the button for detail
Condo.prototype.details = function() {

    let sectionHTML = document.querySelector("section");
    let articleHTML = document.createElement('article');
    let floorHTML = document.createElement('p');
    let locationHTML = document.createElement('address');
    let featuresHTML = document.createElement('p');
    let ratingHTML = document.createElement('p');


    locationHTML.textContent = this.location;
    featuresHTML.textContent = "This includes " + this.features;
    ratingHTML.textContent = "Rating: " + this.rating + "/10";
    floorHTML.textContent = "There are " + this.floor + " floors in total.";

    articleHTML.appendChild(floorHTML);
    articleHTML.appendChild(locationHTML);
    articleHTML.appendChild(featuresHTML);
    articleHTML.appendChild(ratingHTML);
    sectionHTML.appendChild(articleHTML);
}

// STEP FIVE - Create second constructor function for house objects (like a subclass)

function House(name, img, price, rating, location, availability, features, landSize) {
    Stay.call(this, name, img, price, rating, location, availability, features);
    this.landSize = landSize;
}

// STEP SIX - let condo methods inherit from Stay 

House.prototype = Object.create(Stay.prototype);

Object.defineProperty(House.prototype, 'constructor', {
    value: 'House',
    enumerable: false,
    writable: true
});

//STEP 6.5 - display the house details specifically when the user click the detail button

House.prototype.details = function() {

    let sectionHTML = document.querySelector("section");
    let articleHTML = document.createElement('article');
    let floorHTML = document.createElement('p');
    let locationHTML = document.createElement('address');
    let featuresHTML = document.createElement('p');
    let ratingHTML = document.createElement('p');
    let landSizeHTML = document.createElement('p');

    landSizeHTML.textContent = "Land Size: " + this.landSize + " sf";
    locationHTML.textContent = this.location;
    featuresHTML.textContent = "This includes " + this.features;
    ratingHTML.textContent = "Rating: " + this.rating + "/10";
    floorHTML.textContent = "There are " + this.floor + " in total.";

    articleHTML.appendChild(landSizeHTML);
    articleHTML.appendChild(locationHTML);
    articleHTML.appendChild(featuresHTML);
    articleHTML.appendChild(ratingHTML);
    sectionHTML.appendChild(articleHTML);
}


// STEP SEVEN - Instantiate instanc of a house object 

///////////////////////////HOUSE//////////////////////
let bootiful1 = new House('Bootiful Mansion', 'image1.jpg', 149.99, 9, "843 Star Ave NE", "No", ["pool", "Wi-Fi", "foods", "AC"], 800);
bootiful1.display();

let sectionHTML = document.querySelector("section");
let articleHTML = document.createElement("article");
let bootifulButtonDetails1 = document.createElement("button");
let bootifulButtonAvailability1 = document.createElement('button');
bootifulButtonDetails1.textContent = "Details";
articleHTML.appendChild(bootifulButtonDetails1);
bootifulButtonAvailability1.textContent = "Availability";
articleHTML.appendChild(bootifulButtonAvailability1);

let bootiful2 = new Condo('Bootiful Condo', 'image2.jpg', 89.99, 6, "569 Florida Ave SW", "Yes", ["Wi-Fi", "foods", "gym"], 32);
bootiful2.display();

let bootifulButtonDetails2 = document.createElement("button");
let bootifulButtonAvailability2 = document.createElement('button');
bootifulButtonDetails2.textContent = "Details";
articleHTML.appendChild(bootifulButtonDetails2);
bootifulButtonAvailability2.textContent = "Availability";
articleHTML.appendChild(bootifulButtonAvailability2);
sectionHTML.appendChild(articleHTML);

bootifulButtonDetails1.addEventListener("click", function() {
    bootiful1.details();
});
bootifulButtonAvailability1.addEventListener("click", function() {
    bootiful1.available();
});

bootifulButtonDetails2.addEventListener("click", function() {
    bootiful2.details();
});
bootifulButtonAvailability2.addEventListener("click", function() {
    bootiful2.available();
});

    ///////////////////////////////CONTACT INFO//////////////////////////
    // create contact info
    let title = document.createElement('h2');
    let phone = document.createElement('p');
    let adressinfo = document.createElement('address');
    title.textContent = "Contact Awais";
    adressinfo.textContent = "21 Park Lane Circle North York, ON";
    phone.textContent = "416-768-7352";
  
    sectionHTML.appendChild(title);
    sectionHTML.appendChild(phone);
    sectionHTML.appendChild(adressinfo);
   
    let map;
    
    function initMap() {
          let office= {
              lat:43.734633,
              lng:-79.3765367 
          };
      
        let myOffice = document.getElementById('map');

       let CNmap = new google.maps.Map(myOffice, {
          zoom: 16,
          center: office
        });

        let marker = new google.maps.Marker({
            position:office, 
            map:map,
            title: "Yup, that's Drake's house"
        });
    }