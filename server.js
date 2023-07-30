const { app } = require("./app");
require("dotenv").config();

app.listen(process.env.PORT || 8000, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  );
});
