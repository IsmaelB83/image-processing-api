import express from 'express';
import routes from './routes';

const port = 3000;
const app = express();

app.listen(3000, () => console.log(`Server listening at port http://localhost:${port}`));

app.use(routes);

export default app;
