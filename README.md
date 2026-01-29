# Pastebin Lite – Aganitha Solutions Take-Home Assignment

A minimal Pastebin-like web application built as part of the **Aganitha Solutions** take-home assignment.

This project allows users to create text pastes and retrieve them using a unique numeric ID via both a UI page and REST API endpoints.

---

## 🚀 Live Demo

- **Deployed URL:** https://YOUR-VERCEL-URL.vercel.app  
- **Paste Page Example:** `/paste/11`  
- **API Example:** `/api/pastes/11`

---

## ✨ Features

- Create and store text pastes
- Auto-generated numeric paste IDs
- Retrieve paste by ID
- REST API support
- PostgreSQL database integration
- Error handling for invalid and missing IDs
- Built using Next.js App Router

---

## 🛠 Tech Stack

- **Frontend:** Next.js 14, React, TypeScript  
- **Backend:** Next.js API Routes  
- **Database:** PostgreSQL (Neon)  
- **DB Client:** pg  
- **Deployment:** Vercel  
- **Version Control:** GitHub  

---
## 📁 Project Structure

app/
├─ api/
│ └─ pastes/
│ ├─ route.ts # POST: create paste
│ └─ [id]/route.ts # GET: fetch paste by ID
├─ paste/
│ └─ [id]/page.tsx # UI page to display paste
├─ layout.tsx
└─ page.tsx
lib/
└─ db.ts # PostgreSQL connection

POST /api/pastes


**Request Body**
```json
{
  "content": "Hello from Pastebin Lite"
}


📄 Fetch Paste by ID
GET /api/pastes/{id}
Successful Response

{
  "id": 11,
  "content": "Hello from Pastebin Lite"
}

⚠️ Error Handling

Invalid ID

{ "error": "Invalid id" }


Paste Not Found

{ "error": "Paste not found" }

🧪 Run Locally
git clone https://github.com/<your-username>/pastebin-lite.git
cd pastebin-lite
npm install
npm run dev


Open in browser:
http://localhost:3000

🔐 Environment Variables
Create a .env file in the root directory:
DATABASE_URL=your_postgresql_connection_string


✅ Assignment Completion Status
All requirements specified in the Aganitha Solutions take-home assignment have been successfully implemented and tested.

👩‍💻 Author
Mamatha K
GitHub: https://github.com/kmamatha196k

---
## 🚀 Live Demo

https://pastebin-lite-pied-theta.vercel.app

---


  
