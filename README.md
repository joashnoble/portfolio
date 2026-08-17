# Software Engineer Portfolio

My personal portfolio website showcasing my experience, technical skills, selected projects, and professional background as a Software Engineer.

## 🌐 Live Website

**[My Portfolio](https://joashnoble.dev)**

## ✨ Features

- Responsive and modern portfolio design
- Professional introduction and profile
- Work experience
- Technical skills and technologies
- Selected projects
- Contact form
- Serverless contact form API
- Responsive design for desktop and mobile devices

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- Tailwind CSS

### Backend / Serverless

- Cloudflare Workers
- `worker.js` for the contact form API

### Tools & Services

- Git
- GitHub
- Vite
- Cloudflare

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── images/                  # Portfolio images
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Lightbox.jsx
│   │   │   ├── ProjectDetails.jsx
│   │   │   ├── Reveal.jsx
│   │   │   ├── SkillBar.jsx
│   │   │   └── Timeline.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   │
│   │   └── sections/
│   │       ├── About.jsx
│   │       ├── Academic.jsx
│   │       ├── Contact.jsx
│   │       ├── Experience.jsx
│   │       ├── Hero.jsx
│   │       ├── Projects.jsx
│   │       ├── Services.jsx
│   │       └── Skills.jsx
│   │
│   ├── data/
│   │   └── site.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── worker.js
├── wrangler.jsonc
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 📬 Contact Form

The portfolio includes a contact form that allows visitors to send inquiries directly through the website.

The contact form is handled by a **Cloudflare Worker** using `worker.js`. The Worker provides the API endpoint used by the frontend to submit contact form messages.

### Required Configuration

The contact form requires the following:

- Cloudflare Worker
- Resend account (resend.com)
- `RESEND_API_KEY`
- `DESTINATION_EMAIL`
- A verified sending domain in Resend

### Environment Variables / Secrets

The Cloudflare Worker requires the following secrets:

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key used to send contact form emails |
| `DESTINATION_EMAIL` | Email address where contact form messages are received |

Do **not** commit the actual secret values to the repository.

Add the secrets to the Cloudflare Worker using Wrangler:

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put DESTINATION_EMAIL
```

When prompted, enter the corresponding values.

For `RESEND_API_KEY`, use a Resend API key with only the permissions required to send emails whenever possible.

## ☁️ Deployment

The portfolio is deployed using **Cloudflare** and consists of a React.js frontend with a serverless Worker handling the contact form API.

Before deploying, make sure the required Cloudflare Worker secrets are configured:

```bash
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put DESTINATION_EMAIL
```

## 📱 Responsive Design

The portfolio is designed to provide a consistent experience across:

- Desktop
- Laptop
- Tablet
- Mobile devices

## 👨‍💻 About

I am a Software Engineer with experience in full-stack web development, system maintenance, API integrations, and developing business applications.

My experience includes working with PHP, Laravel, CodeIgniter, JavaScript, React, MySQL, WordPress, REST APIs, and various third-party services.

## 📄 License

This project is a personal portfolio and is not intended for redistribution or commercial use.