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

```

## 🛑 Prerequisites

Before running this application locally, ensure you have the following installed and configured:
* **Java Development Kit (JDK 17)** or higher
* **Apache Maven** (v3.8+)
* **MySQL Server** (v8.0+)
* A modern web browser with JavaScript enabled

---

## 🔧 Getting Started & Installation

### 1. Database Configuration
1. Open your MySQL client or terminal and create a new schema named `edproject2db`:
   ```sql
   CREATE DATABASE edproject2db;
   ```
2. Open src/main/resources/application.properties and update the database credentials to match your local setup:
   ```Properties
   spring.datasource.username=your_mysql_username
   spring.datasource.password=your_mysql_password
   ```
### 2. Build and Run the Server
Navigate to the root directory of the project in your terminal and execute the following Maven commands:

```bash
# Clean previous builds and compile the project
mvn clean install

# Launch the Spring Boot Application
mvn spring-boot:run
```
The embedded Tomcat server will spin up and start listening on port 8080 by default.

### 3. Launching the App
Since the application frontend is mapped under the webapp context of the Spring Boot application, open your browser and navigate to:

```text
http://localhost:8080/index.html
```

## 🔌 API Endpoints Reference

All requests must be prefixed with `/home` and exchange data using `application/json`.

| Method | Endpoint | Description | Payload / Query Params | Success Status |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/home/getAllGames` | Retrieves all upcoming matches | None | `200 OK` |
| **POST** | `/home/add` | Creates a new scheduled match | `{"player1": "string", "player2": "string", "date": "d/m/Y"}` | `201 CREATED` |
| **DELETE** | `/home/delete/{gid}` | Cancels/removes an explicit match by ID | Path variable: `{gid}` | `200 OK` |
| **GET** | `/home/validatingName` | Validates a player's name via regex | `?name=string` | `200 OK` / `406 NOT_ACCEPTABLE` |
| **GET** | `/home/validatingDate` | Validates that a date is not null/empty | `?date=string` | `200 OK` / `406 NOT_ACCEPTABLE` |
