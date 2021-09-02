// Node imports
import express from 'express';
import path from 'path';
// Own imports
import routes from './routes';

const port = 3000;
const app = express();

app.listen(3000, () => console.log(`Server listening at port http://localhost:${port}`));

app.use(express.static(path.join(__dirname,'/public')));

app.get('/', (req, res) => res.send('OK 200'));
app.use(routes);

export default app;
