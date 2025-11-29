# **GitHub Repo: Wonderlust**

**Project Name:** Wonderlust – Airbnb Clone

## **Live Demo**

Check out Wonderlust live here: [Live Demo](https://wonderlust-o00s.onrender.com/listings)

**Description:**
Wonderlust is a full-stack web application inspired by Airbnb. Users can create accounts, add listings for rent, write reviews, and manage their own accounts. The project follows the **MVC (Model-View-Controller) pattern** for clean architecture.

**Technologies:**

* Node.js, Express.js
* MongoDB & Mongoose
* EJS Templating
* Passport.js for authentication
* Cloudinary for image uploads
* Mapbox for map views
* HTML, CSS, JavaScript

---

## **Features**

1. **Authentication:** Register, login, logout, delete account.
2. **Listings:** CRUD operations on listings (houses, rooms, apartments).
3. **Reviews:** Users can create, update, delete reviews for listings.
4. **User Dashboard:** Manage user’s own listings and reviews.
5. **Image Uploads:** Cloudinary integration for listing images.
6. **Validation:** Input validation using Joi.
7. **Map View:** Display listing locations on interactive maps.
8. **Filtering/Search:** Filter listings by location.

---

## **Folder Structure (MVC Pattern)**

```
wonderlust/
│
├── controllers/            
│   ├── users.js
│   ├── listings.js
│   └── reviews.js
│
├── init/                   
│   ├── data.js
│   └── index.js
│
├── models/                 
│   ├── user.js
│   ├── listing.js
│   ├── review.js
│   └── schema.js           
│
├── routes/                 
│   ├── users.js
│   ├── listings.js
│   └── reviews.js
│
├── middleware/             
│   └── middleware.js
│
├── utils/                  
│   └── cloudConfig.js      
│
├── public/                 
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/                  
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── reviews/
│
├── node_modules/           
│
├── app.js                  
├── cloudConfig.js
├── package.json
├── package-lock.json
├── schema.js    
└── .env                    # Environment variables
```

---

## **Installation**

1. Clone the repo:

```bash
git clone https://github.com/05Waleed/WonderLust
cd wonderlust
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your own credentials

```
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
MAP_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_url
SECRET=your_session_secret
```

4. Start the server:

```bash
npm run dev   # if using nodemon
npm start     # normal start
```

5. Visit `http://localhost:8080` in your browser.

---

## **MVC Pattern Description**

* **Models:** Define schemas for users, listings, and reviews using Mongoose.
* **Views:** EJS templates render dynamic content.
* **Controllers:** Handle requests and responses, business logic, and database interaction.
* **Routes:** Map URLs to controller functions.
* **Middleware:** Authentication checks, error handling, etc.
* **Utils:** Reusable utilities like Cloudinary configuration.

---

## **Dependencies**

```json
"dependencies": {
  "@mapbox/mapbox-sdk": "^0.16.2",
  "cloudinary": "^1.41.3",
  "connect-flash": "^0.1.1",
  "connect-mongo": "^5.1.0",
  "dotenv": "^17.2.3",
  "ejs": "^3.1.10",
  "ejs-mate": "^4.0.0",
  "express": "^5.1.0",
  "express-session": "^1.18.2",
  "joi": "^18.0.1",
  "method-override": "^3.0.0",
  "mongoose": "^8.18.1",
  "multer": "^2.0.2",
  "multer-storage-cloudinary": "^4.0.0",
  "passport": "^0.7.0",
  "passport-local": "^1.0.0",
  "passport-local-mongoose": "^8.0.0"
}
```

---

## **Future Improvements**

* Payment integration (Stripe)
* Favorites/likes system
* Advanced filtering (by amenities, ratings)
* Multi-language support

---
