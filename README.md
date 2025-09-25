🚀 Personal Portfolio

A modern and responsive personal portfolio web application built with React.js, showcasing my skills, projects, and experience. The portfolio is designed with a modular architecture using custom React components and styled with SCSS for a clean UI/UX.

✨ Features

📱 Responsive Design – Works seamlessly across desktop, tablet, and mobile.

⚛️ React.js Components – Modular and reusable components for easy scalability.

🎨 SCSS Styling – Clean and maintainable styles with custom variables and mixins.

🔄 CI/CD Pipeline – Automated build, test, and deployment using GitHub Actions and Docker.

☁️ Production Ready – Containerized deployment ensures high reliability and consistency.

⚡ Hooks & Containers – Maintained clean architecture with React hooks and container-based structure.

🛠️ Tech Stack

Frontend: React.js, JavaScript, HTML5, SCSS

Backend/Environment: Node.js

DevOps & Automation: Docker, GitHub Actions (CI/CD)

Version Control: Git/GitHub

🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
 (v14 or later)

Docker

Git

Installation & Setup
# Clone the repository
git clone https://github.com/your-username/portfolio.git

# Navigate to project folder
cd portfolio

# Install dependencies
npm install

# Start the development server
npm start

Build & Run with Docker
# Build Docker image
docker build -t portfolio-app .

# Run the container
docker run -p 3000:3000 portfolio-app

⚙️ CI/CD with GitHub Actions

On every push to main, GitHub Actions:

Installs dependencies

Runs tests

Builds the project

Creates a Docker image and deploys to the configured environment
