import 'dotenv/config';
import expressServer from './src/rest-api/express-server';

const init = async () =>{
  try {
    const server = await expressServer();
    const port = process.env.PORT_API || 3000
    server.listen(port, () =>{
      console.log(`API run on http://localhost:${port}`);
    })
  } catch (error) {
    console.error(error);
  }
};

init();