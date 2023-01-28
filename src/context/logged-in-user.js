import { createContext } from 'react';

const LoggedInUserContext = createContext({
  "fullName": "John Doe",
  "username": "johndoe",
  "userId": "12345",
  "following": ["54321", "67890", "09876"]
});
export default LoggedInUserContext;