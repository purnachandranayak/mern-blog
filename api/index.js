import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
  process.env.MONGO
).then(
  () => {
    console.log('Mongodb is connected');
  }
)
  .catch((err) => {
    console.log(err, "Mongodb not connected");
  })

const app = express();

app.listen(3000, () => {
  console.log('Serer is running on port 3000');
})