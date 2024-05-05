# Silfra-Assignment
Chat Application

<img src="Readme Images/1.png">

##Components:
Frontend (React.js):
Login/Register Page: Users can login with a nickname and enter the public chat room.
Chat Room Selection: After logging in, users can choose from existing chat rooms or create new ones.
Chat Interface: Once inside a chat room, users can send and receive messages in real-time.


Backend:
Server (Node.js/Express): Manages client connections and serves API requests.
Database (MySQL): Stores user information, chat room data, and message history.

##Functionality:

Chat Room Management:
Users can create new chat rooms.
Existing chat rooms can be joined by selecting them from a list.
Real-Time Messaging:
Users can send messages in real-time to participants within the same chat room.
Messages are instantly displayed to all participants within the chat room.
Message History:
The application stores the message history for each chat room.
Users can view past messages upon joining a chat room.

<img src="Readme Images/2.png">


##Technologies Used:
Frontend:
React.js: For building interactive user interfaces.
React Router: For routing within the application.
Axios: For making HTTP requests to the backend server.
Backend:
Node.js: For server-side JavaScript runtime.
Express.js: For building the RESTful API.
Socket.IO: For real-time bidirectional event-based communication.
MySQL: For storing user data, chat room information, and message history.
Database:
MySQL: A relational database management system used to store user data and chat-related information.
