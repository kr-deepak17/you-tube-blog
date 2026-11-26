# Blogify 📝

A full-stack blogging application built using **Node.js, Express.js, MongoDB, EJS, and Bootstrap**, where users can create blog posts, upload cover images, read blogs, and interact through comments.

🚀 **Deployed on AWS Elastic Beanstalk**

---

## 🌐 Live Demo

[Visit Blogify](http://blogify-env.eba-kvshdkm8.ap-south-1.elasticbeanstalk.com/)

---

## ✨ Features

- 🔐 User Authentication – Signup, Login and Logout.
- 🔑 Secure Password Hashing using Node.js Crypto.
- 🍪 Cookie-based Authentication using JWT.
- ✍️ Create and Publish Blog Posts.
- 🖼️ Upload Blog Cover Images using Multer.
- 📖 View Individual Blog Posts.
- 💬 Add Comments to Blog Posts.
- 👤 Display Author Information and Profile Pictures.
- 🗄️ MongoDB Database Integration.
- 📱 Responsive UI using Bootstrap.
- ☁️ Deployed on AWS Elastic Beanstalk.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend Runtime |
| Express.js | Web Framework |
| MongoDB | Database |
| Mongoose | ODM |
| EJS | Server-side Rendering |
| Bootstrap | Frontend Styling |
| Multer | File Upload Handling |
| JWT | Authentication |
| Cookie Parser | Cookie Management |
| AWS Elastic Beanstalk | Cloud Deployment |

---

## 📂 Project Structure

```text
Blogify/
│
├── models/
│   ├── user.js
│   ├── blog.js
│   └── comment.js
│
├── routes/
│   ├── user.js
│   └── blog.js
│
├── middlewares/
│   └── auth.js
│
├── services/
│   ├── authentication.js
│   └── user.js
│
├── views/
│   ├── partials/
│   ├── home.ejs
│   ├── blog.ejs
│   ├── addBlog.ejs
│   ├── signin.ejs
│   └── signup.ejs
│
├── public/
│   └── images/
│
├── app.js
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Blogify
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the root directory:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**4. Start the development server**

```bash
npm run dev
```

Or start normally:

```bash
npm start
```

Open your browser:

```text
http://localhost:8000
```

---

## 🔗 Application Routes

### User Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/user/signup` | Signup page |
| POST | `/user/signup` | Register user |
| GET | `/user/signin` | Login page |
| POST | `/user/signin` | Authenticate user |
| GET | `/user/logout` | Logout user |

### Blog Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Homepage |
| GET | `/blog/add-new` | Create blog page |
| POST | `/blog` | Publish new blog |
| GET | `/blog/:id` | View individual blog |
| POST | `/blog/comment/:blogId` | Add comment |

---

## ☁️ Deployment

Blogify is deployed using **Amazon AWS Elastic Beanstalk**.

Deployment involves:

- Configuring the Node.js environment.
- Setting production environment variables.
- Connecting the application to MongoDB.
- Deploying the application bundle.
- Running the application in the AWS environment.

---

## 🔮 Future Improvements

- [ ] Store uploaded images in Amazon S3.
- [ ] Add Edit and Delete Blog functionality.
- [ ] Add User Profile Management.
- [ ] Implement Like and Unlike functionality.
- [ ] Add Search and Filter functionality.
- [ ] Improve UI/UX.
- [ ] Add Pagination.

---

## 👨‍💻 Author

**Deepak Kumar**

B.Tech CSE (AI) Student | Backend Developer

- GitHub: [@kr-deepak17](https://github.com/kr-deepak17)

---

⭐ If you like this project, consider giving it a star!

**Built with ❤️ using Node.js and MongoDB.**
