const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.token?.split(" ")[1];
  jwt.verify(token,"access_token", function (err, user) {
    if (err) {
      return res.status(404).json({
        message: "the authemtication",
        status: "error",
      });
    }

    if (user.isAdmin) {
      // nếu isAdmin trả về bằng true thì sẽ đi tiếp qua api delete
      next();
    } else {
      return res.status(404).json({
        message: "the authemtication",
        status: "error",
      });
    }
  });
};

const authUserMiddleware = (req, res, next) => {
  // console.log("req.headers", req.headers);
  const token = req.headers.token?.split(" ")[1];
  const userId = req.params.id;

  //refesrch eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNjY2ZjAxYzY2MzU2NmY1MzZlYTQ3NWJjIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE3MTg1NTEzNTMsImV4cCI6MTc1MDA4NzM1M30.q7pGhkfOkh6ABlMkJR8ik1Pb6ySlfpopA8YPEnTKWZg
  jwt.verify(token, "access_token", function (err, user) {
    if (err) {
      return res.status(404).json({
        err: err,
        message: "the authemtication",
        status: "error",
      });
    }
    if (user.payload?.isAdmin || user.payload?.id === userId) {
      next();
    } else {
      return res.status(404).json({
        message: "the authemtication",
        status: "error",
      });
    }
  });
};

module.exports = {
  authMiddleware,authUserMiddleware
};
