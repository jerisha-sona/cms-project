class UserService {
  constructor() {
    const data = localStorage.getItem('db');
    if (data === null) {
      // Initialize with empty users array if not present
      this.db = { users: [] };
      localStorage.setItem('db', JSON.stringify(this.db));
    } else {
      // Load existing data from localStorage
      this.db = JSON.parse(data);
    }
  }

  addUser(email, password) {
    if (this.isUserExists(email)) {
      throw new Error('User already exists');
    }
    this.db.users.push({ email, password });
    this._updateLocalStorage();
  }

  isUserExists(email) {
    return this.db.users.some(user => user.email === email);
  }

  authenticate(email, password) {
    const user = this.db.users.find(user => user.email === email);
    if (!user) {
      throw new Error('Wrong email');
    }
    if (user.password !== password) {
      throw new Error('Wrong password');
    }
  }

  editUserEmail(oldEmail, newEmail) {
    if (!this.isUserExists(oldEmail)) {
      throw new Error('User does not exist');
    }
    if (this.isUserExists(newEmail)) {
      throw new Error('New email already in use');
    }
    this.db.users = this.db.users.map(user => 
      user.email === oldEmail ? { ...user, email: newEmail } : user
    );
    this._updateLocalStorage();
  }

  editUserPassword(email, newPassword) {
    if (!this.isUserExists(email)) {
      throw new Error('User does not exist');
    }
    this.db.users = this.db.users.map(user => 
      user.email === email ? { ...user, password: newPassword } : user
    );
    this._updateLocalStorage();
  }

  _updateLocalStorage() {
    localStorage.setItem('db', JSON.stringify(this.db));
  }
}

const userService = new UserService();
export default userService;
