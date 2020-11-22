# Hospital_api v1
A typical api where in doctor registers himself, registers patients and make covid19 reports for them. 
### Technologies used: Node JS, Express JS, MongoDB, JWTs.
## How to setup
step1: clone the repository.\
step2: In the terminal do`npm install` to download all the dependencies.
## How to use
do`npm start` to start the server.\

## Available routes
api/v1/doctor/create-doctor (pass username and password).  `if doctor already registered return the doctor info` .\
api/v1/doctor/create-session `returns the JWT to be used` .\
api/v1/patient/create-patient (pass name and phone)  `if patient already exists return the patient info` .\
api/v1/patient/id/create-report (pass patient's id, doctor's name and report status).\
api/v1/patient/id/all-reports (pass patient's id) .\
api/v1/report/status  `['Negative', 'Travelled-Quarantine','Symptoms-Quarantine', 'Positive-Admit']`
            
