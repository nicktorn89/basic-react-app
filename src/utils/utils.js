const getUserId = () => {
  const { AP } = window;

  if (AP) {
    return new Promise((resolve) => {
      AP.user.getCurrentUser((user) => {
        user && user.atlassianAccountId ? resolve(user.atlassianAccountId) : resolve(process.env.REACT_APP_USER_ID);
      });
    });
  }

  return process.env.REACT_APP_USER_ID;
};

const getClientKey = () => window.clientKey ? window.clientKey : process.env.REACT_APP_CLIENT_KEY;

const getJwtToken = () => {
  const { AP } = window;

  if (AP) {
    return new Promise((resolve) => {
      AP && AP.context.getToken((token) => {
        resolve(token);
      });
    });
  }
};

export {
  getUserId,
  getClientKey,
  getJwtToken,
};
