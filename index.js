const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/Student.route"));

mongoose.connect("mongodb+srv://Baysangur:bechan999@cluster0.igeqhh5.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
  console.log('Сервер запущен успешно')
})