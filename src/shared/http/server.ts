import express from 'express';
import cors from 'cors';
import routes from './routes';
const app = express();

app.use(express.json());
app.use(cors);

app.use(routes);

app.listen(5555, () => {
  console.log('Server started on Port 5555!');
});
