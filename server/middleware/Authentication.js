// Grab the token that is sent through the front-end, then validate by using the jwt function, verify. If valid, then continue with request, else, return json with error
const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");

  // if doesn't restore access token
  if (!accessToken) return res.json({ error: "User not logged in" });

  try {
    // variable verify valid token, it uses the random string in user.js
    const validToken = verify(accessToken, "3X2xOjbneC");
    req.user = validToken;
    if (validToken) {
      // moves forward with the request placed before the middleware
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
