# Store_ratings_management

## Project Description
This project is a web application enabling users to submit ratings for stores registered on the platform. The ratings range from 1 to 5. The application supports multiple user roles: System Admin, Normal User, and Store Owner, each with distinct functionalities.

###User Roles and Functionalities

System Admin
- Admin Capabilities:
 - Sign up and log in to the platform
  - Add stores, normal users, and admin users.
  - View a dashboard with the following details:
    - Total Users
    - Total Stores
    - Total Users Submitted Rating
 - View details of all types of users:
    - Name, Email, Address, and Role
    - Rating (for Store Owners)
    - Stores
 - Logout option

Normal User
- User Capabilities:
  - Sign up and log in to the platform
  - View the list of all registered stores
  - Store listing table fields:
    - Overall ratings
    - My submitted rating
    - Option to submit a rating
    - Option to modify submitted rating
  - Submit ratings between 1 to 5 for individual stores
  - Logout option

Store Owner
- Store Owner Capabilities:
  - Log in to the platform
  - View a dashboard showing:
    - List of users who have submitted ratings to their store
    - Average total submitted ratings to their store
  - Logout option



## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone [https://github.com/GaneshKolekar4753/Roxiler-assignment.git]
    ```

2. Install frontend dependencies:
   ```bash
    cd client
    npm install
    npm start
    ```
4. Install backend dependencies:
      ```bash
    cd server
    npm install
    npm start
    ```
6. set env varibles in .env file

   

   
### Running the App

Start the development server:

```bash
npm start



