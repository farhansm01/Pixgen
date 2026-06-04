# PixGen – AI Image Generation Gallery

A modern AI-powered gallery platform where users can explore and interact with AI-generated images. Browse categorized images, view detailed prompts, and manage your profile after authentication.

🌐 **Live Site:** [https://pixgen-roan.vercel.app](https://pixgen-roan.vercel.app)

---

## Features

- **Home Page** — Hero banner with featured Top Generations section
- **All Photos Page** — Full gallery with sidebar category filter (tabs on mobile)
- **Photo Details Page** — Full image view with prompt, model, resolution, tags, likes & downloads
- **Authentication** — Email/password sign up & sign in with Google OAuth support
- **Protected Routes** — Profile and photo details pages secured via Next.js Proxy
- **Profile Page** — View account info and update name & profile image
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop
- **Toast Notifications** — Success and error feedback on all actions

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework |
| Tailwind CSS v4 | Styling |
| HeroUI | UI Component Library |
| Better Auth v1.6.11 | Authentication |
| MongoDB Atlas | Database |
| Gravity UI Icons | Icon Library |
| React Hot Toast | Notifications |
| Vercel | Deployment |

---

## Pages

| Route | Description | Protected |
|---|---|---|
| `/` | Home with banner and top generations | No |
| `/all-photos` | Full gallery with category filter | No |
| `/all-photos/[id]` | Detailed view of a single photo | Yes |
| `/profile` | User profile with update option | Yes |
| `/signin` | Email & Google sign in | No |
| `/signup` | Register with email & Google | No |

---

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Google OAuth credentials

### Installation

```bash
git clone https://github.com/farhansm01/Pixgen.git
cd pixgen
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── (main)/         # Pages with Navbar & Footer
│   ├── (auth)/         # Sign in & Sign up pages
│   └── api/auth/       # Better Auth API route
├── components/         # Reusable components
├── lib/
│   ├── auth.js         # Better Auth server config
│   └── auth-client.js  # Better Auth client config
└── middleware.js        # Route protection (Proxy)
public/
└── data.json           # AI image data source
```

---

## Author

**Farhan Sadiq**
- GitHub: [@farhansm01](https://github.com/farhansm01)

---

## License

This project is open source and available under the [MIT License](LICENSE).
