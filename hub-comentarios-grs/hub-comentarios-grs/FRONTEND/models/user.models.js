class User {
  constructor(id, username, firstname, lastname, password) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.password = password;
  }
  getId() {
    return this.id;
  }
  getUsername() {
    return this.username;
  }
  getFirstname() {
    return this.firstname;
  }
  getLastname() {
    return this.lastname;
  }
  getPassword() {
    return this.password;
  }
  setUsername(username) {
    this.username = username;
  }
  setFirstname(firstname) {
    this.firstname = firstname;
  }
  setLastname(lastname) {
    this.lastname = lastname;
  }
  setPassword(password) {
    this.password = password;
  }
}

export { User };
