🏥 DigiHealth - A Centralized Healthcare Management System

DigiHealth is a Spring Boot-based healthcare management system designed to streamline patient records, appointments, and medical history tracking. It provides a secure and efficient way for healthcare professionals and patients to interact with medical services.

🚀 Features ->

🏥 Patient Management – Register, update, and manage patient records.
📅 Appointment Scheduling – Book and manage doctor appointments.
🩺 Electronic Health Records (EHR) – Secure storage and retrieval of medical records.
🔐 User Authentication & Authorization – Secure login with role-based access.
📊 Dashboard & Reports – View statistics on patient visits and health trends.
📨 Email & Notification System – Alerts for appointments and medical updates.

🏗 Tech Stack ->

Backend: Java, Spring Boot, Spring Data JPA
Database: MySQL
Frontend: React.js
API Documentation: Swagger
Deployment: 

📦 Installation & Setup ->

1️⃣ Clone the Repository: git clone https://github.com/yourusername/DigiHealth.git
                          cd DigiHealth
2️⃣ Configure the Database
Modify application.properties with your database credentials.

spring.datasource.url=jdbc:mysql://localhost:3306/digihealth
spring.datasource.username=root
spring.datasource.password=yourpassword

3️⃣ Build & Run the Application:
 Using Maven:
  Copy
  Edit
  mvn clean install
  mvn spring-boot:run
  
4️⃣ Access the Application:
API Documentation: http://localhost:8080/swagger-ui.html
Admin Panel: http://localhost:8080/admin-dashboard

📌 API Endpoints
Endpoint	             Method	             Description
/api/patients	          GET	                Fetch all patients
/api/patients/{id}	    GET                 Get patient details
/api/appointments	      POST	              Schedule an appointment
/api/doctors	          GET	                List all doctors
/auth/login	            POST	              User authentication

More details available in Swagger UI.

