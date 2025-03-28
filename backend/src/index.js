import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.listen(5000, () => {
  console.log('Server is running on port ' + PORT);
});
