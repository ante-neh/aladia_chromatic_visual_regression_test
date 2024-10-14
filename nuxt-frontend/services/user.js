const users = [
    'user1@example.com',
    'user2@example.com',
    'admasterefe00@gmail.com',
  ];
  
  export function checkIfUserExists(email) {
    return users.includes(email);
  }
  
  export function addUser(email) {
    if (!checkIfUserExists(email)) {
      users.push(email);
      return true;
    }
    return false;
  }