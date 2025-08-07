
---

## Features

- ➕ Add new course
- 📄 View all courses
- 📝 Update course details
- ❌ Delete a course
- ✅ Toast notifications
- 🔀 Dynamic routing
- 🎨 Styled with Reactstrap (Bootstrap)

---

##  How to Run

###  Backend (Spring Boot)

1. Open terminal in the `backend/` folder.  
2. Configure your PostgreSQL credentials in:  
   `src/main/resources/application.properties`
3. Run the server:
   mvn spring-boot:run

### Frontend (React.js)

1. Open terminal in `frontend/` folder.
2. Run: `npm install`
3. Then: `npm start`
4. App will run on: `http://localhost:3000`

---

## How Frontend & Backend Work

- Frontend sends HTTP requests using **Axios**.
- Backend exposes **REST APIs** to perform CRUD operations.
- PostgreSQL stores all course data.
- JSON format is used for data transfer between frontend and backend.
