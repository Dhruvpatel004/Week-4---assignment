const express = require('express');
const app = express();
const port = 5001;

const authMiddleware = require('./middleware/auth');
const homepageRoutes = require('./routes/homepageRoutes');
const userRoutes = require('./routes/userRoutes');

//Home page Route
app.use('/', homepageRoutes);

// User Route with auth 

// for Authentication send name=Dhruv on query paremerter
//Example : http://localhost:5001/user/?name=Dhruv
 
app.use('/user',authMiddleware);
app.use('/user',userRoutes);;



app.listen(port, (err) => {
  if (err) {
    console.log("Server is not running");
  } else {
    console.log(`Server is running at PORT: ${port}`);
  }
});
