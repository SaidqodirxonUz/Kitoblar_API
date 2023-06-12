import express from "express";
import userRoutes from "./routes/user.js";
import bookRoutes from "./routes/books.js";
import authorRoutes from "./routes/authors.js";
///
const app = express();
///
app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);
app.use(authorRoutes);
///
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
  console.log(`server run  http://localhost:${PORT}`);
});
