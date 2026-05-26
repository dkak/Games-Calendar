# Match Scheduler SPA

A lightweight, Single Page Application (SPA) designed to schedule and manage upcoming matches within a moving 7-day window. This project was built as an experimental ground for combining asynchronous frontend behavior with a robust Spring Boot REST API.

---

## 🚀 Features

* **Asynchronous UX:** Fully Ajax-based operations prevent full-page reloads, ensuring a smooth single-page application experience.
* **Dynamic Date Restrictions:** Uses `flatpickr` to restrict match selections strictly between **today** and the **next 7 days**. 
* **Smart Disabling:** Automatically blocks dates on the calendar if a match has already been scheduled for that day.
* **Real-time Validation:** Dynamic name and date validation on inputs via asynchronous backend checks.
* **Chronological Sorting:** Automatically sorts scheduled matches dynamically on the client side whenever a new match is loaded or created.

---

## 🛠️ Technical Specifications

### Frontend
* **Core:** HTML5, CSS3, JavaScript (ES6)
* **DOM & Ajax:** jQuery (v1.7.1)
* **Plugins:** * [Flatpickr](https://flatpickr.js.org/) (Datepicker handling)
  * [SweetAlert](https://sweetalert.js.org/) (Elegant error and warning alerts)

### Backend
* **Framework:** Spring Boot (v3.1.4)
* **Data Access:** Spring Data JPA / Hibernate
* **Database:** MySQL
* **Build Tool:** Maven (Java 17)

---

## 📦 Project Architecture & Directory Structure

```text
├── src/
│   ├── main/
│   │   ├── java/com/dkak/project2/
│   │   │   ├── controller/      # REST API Endpoints (GameController)
│   │   │   ├── dao/             # JPA Repositories (GameDao)
│   │   │   ├── model/           # Database Entities (Game)
│   │   │   └── service/         # Core Business Logic & Validations (GameService)
│   │   └── resources/
│   │       └── application.properties  # Database and Hibernate configurations
│   └── webapp/                  # Static Frontend Assets
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   ├── game.js          # Core Ajax requests (GET, POST, DELETE)
│       │   ├── script.js        # DOM mutations, animations, and sorting
│       │   └── validation.js    # Event listeners for input validation
│       └── index.html           # Main Application View
├── pom.xml                      # Maven Dependencies
└── README.md
