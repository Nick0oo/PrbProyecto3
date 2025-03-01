const authModule = {
  // Store user credentials
  credentials: {
    username: null,
    token: null
  },

  // Login function
  login: function(username, password) {
    // Simulate authentication
    if (username && password) {
      this.credentials.username = username;
      this.credentials.token = 'dummy-token-' + Math.random();
      return true;
    }
    return false;
  },

  // Logout function
  logout: function() {
    this.credentials.username = null;
    this.credentials.token = null;
  },

  // Check if user is authenticated
  isAuthenticated: function() {
    return !!this.credentials.token;
  }
};

export default authModule;
