# AttendEase Admin Dashboard

A modern admin dashboard for the AttendEase Classroom Management System built with React, Tailwind CSS, and MUI.

## Features

- 📊 **Dashboard** - Overview with stats cards, recent activity, and system status
- 🏫 **Departments** - Manage training departments (MERN, MEAN, Java FS, SDET)
- 📚 **Subjects** - Course management with type and quarter fields
- 👨‍🎓 **Students** - Student directory with CSV bulk import
- 👨‍🏫 **Teachers** - Faculty management

## Tech Stack

- **React 18** with JavaScript
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **MUI (Material UI)** - UI components
- **React Router** - Navigation
- **LocalStorage** - Demo data persistence

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   └── MainLayout.jsx
│   └── ui/
│       ├── StatsCard.jsx
│       └── DataTable.jsx
├── context/
│   └── DataContext.jsx
├── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Students.jsx
│   ├── Departments.jsx
│   ├── Subjects.jsx
│   └── Teachers.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Demo Data

The app includes demo data stored in localStorage:
- 5 Departments
- 5 Subjects
- 5 Students
- 4 Teachers

Data persists across page refreshes. To reset, clear localStorage.

## CSV Import

Use the bulk import feature on the Students page. CSV format:

```csv
name,email,department,rollNumber
John Doe,john@example.com,MERN,MERN2024001
```

## License

MIT
