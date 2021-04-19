class Session {
	user = {isAdmin: false, token: null};

  constructor() {
    const userInfo = localStorage.getItem("user");
    if(userInfo) {
      this.user = JSON.parse(userInfo);
    }
  }

	setUser(user) {
		this.user = user;
		localStorage.setItem('user', JSON.stringify(user));
	}

	deleteUser() {
		localStorage.removeItem('user');
		this.user = {isAdmin: false, token: null};
	}

	getUser() {
		return this.user;
	}
}

export default new Session();