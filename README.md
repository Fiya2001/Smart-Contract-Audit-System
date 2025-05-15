
## Smart Contract Audit System

A full-stack web application that allows users to upload Ethereum smart contracts (`.sol` files) for automated auditing. The system performs static code analysis using Slither, categorizes vulnerabilities, and provides actionable recommendations.

---

##  Features

- Upload and audit Solidity smart contracts
- Vulnerability detection using Slither static analysis
- Categorized audit reports with suggestions
- Secure file upload and error handling
- View and retrieve previous reports via dashboard
- RESTful API with Flask backend
- Frontend built with React and modern UI practices
- MySQL database integration for persistent storage

---

##  Tech Stack

### Frontend:
- React.js
- React Router
- HTML/CSS

### Backend:
- Python
- Flask
- Slither (Smart Contract Analyzer)
- Regex for parsing results

### Database:
- MySQL

### Tools & Libraries:
- Solc-Select
- Git & GitHub
- Markdown report generation

---

##  Project Structure

```
/react_pj             # React frontend
/main.py              # Flask backend entry point
/uploads              # Stores uploaded .sol files
/templates            # Flask HTML templates
/reports              # Generated audit results
```

---

##  Installation & Setup

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/Fiya2001/Smart-Contract-Audit-System.git
cd Smart-Contract-Audit-System
```

###  2. Set Up Frontend

```bash
cd react_pj
npm install
npm start
```

###  3. Set Up Backend

```bash
pip install -r requirements.txt
python main.py
```

###  4. MySQL Configuration

Make sure MySQL is running. Configure DB credentials inside your Python connection script and run:

```bash
SHOW DATABASES;
```

---

##  API Endpoints

| Method | Endpoint                     | Description                           |
|--------|------------------------------|---------------------------------------|
| POST   | `/analyze-contracts`         | Uploads and analyzes smart contract   |
| GET    | `/get-audits`                | Fetch list of previous reports        |
| GET    | `/analyzed-results/<file>`   | View results for specific contract    |
| GET    | `/report/<report_id>`        | View vulnerabilities in a report      |

---

##  Authors

- Mohammad Fiyazul Haque  
- Mohammad Azwad Akbar Symoom  
- Tan Phuong Dao

---

##  License

This project is for academic and learning purposes. All content © 2024 COS30049 – Swinburne University of Technology.

---
