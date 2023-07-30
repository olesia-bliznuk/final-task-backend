import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';


(async () => {
  try {
    await mongoose.connect('mongodb+srv://olesyablizniuk:KQzAi2UkNpeUl3r1@cluster0.2cywmuu.mongodb.net/managerApp?retryWrites=true&w=majority');
    // await mongoose.connect('mongodb://localhost:27017/');
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
