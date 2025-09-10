# WanderNest 🌍

WanderNest is a full-stack web application that allows users to explore, share, and manage places around the world. Users can browse detailed listings of places including price, location, country, category, description, and title. The platform supports user authentication, adding new places, editing and deleting listings by their owners, filtering by category, searching, and writing reviews for any place.

---

## 🚀 Project Overview

WanderNest enables travelers and property owners to connect in a seamless way. Users can:
- Discover amazing places to stay.
- Filter and search places by category or keyword.
- Add their own place listings for others to see.
- Edit or delete only the listings they own.
- Write reviews on places they visited.
- Enjoy a fully responsive and user-friendly interface.

It’s designed with scalability and security in mind, making it ideal for property enthusiasts, travelers, and developers.

---

## 🌟 Key Features

- User Authentication: Signup, Login, Logout
- Browse detailed place listings with images
- Add new place listings (with images)
- Edit and Delete listings (only by the listing owner)
- Filter places by category
- Search places using keywords
- Write reviews for any place
- Image storage using Cloudinary
- Session management with express-session + connect-mongo
- Server-side validation using Joi
- Fully responsive frontend UI with Bootstrap 5
---

## 🧱 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas + Mongoose)
- **Frontend:** EJS templating, Bootstrap 5
- **Image Storage:** Cloudinary
- **Authentication:** Passport.js
- **Validation:** Joi
- **File Uploads:** Multer
- **Sessions:** express-session + connect-mongo
- **Environment Variables Management:** dotenv
---

## ✅ Installation & Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/WanderNest.git
    ```

2. Navigate to the project directory:
    ```bash
    cd WanderNest
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the project root with this content:
    ```env
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_KEY=your_cloudinary_key
    CLOUDINARY_SECRET=your_cloudinary_secret
    ATLASDB_URI=your_mongodb_atlas_connection_string
    SECRET=your_session_secret
    ```

5. Start the application:
    ```bash
    node app.js
    ```

6. Visit in your browser:
    ```
    http://localhost:8080
    ```

---

## ⚡ Dependencies

```bash
npm install express mongoose ejs-mate dotenv method-override joi express-session connect-mongo multer cloudinary passport passport-local passport-local-mongoose multer-storage-cloudinary connect-flash
