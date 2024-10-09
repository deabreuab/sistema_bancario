import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT ||"4000", 10);//10 es la base numérica

// Middleware para parsear solicitudes JSON
app.use(express.json());//ES NECESARIO SI NO ESTA SALE UNDEFINED, Esto asegurará que todas las solicitudes con un cuerpo JSON se puedan acceder a través de req.body en tus rutas.

app.get("/", (req: Request, res: Response): void => {
  res.send('Hello world!');
});

// Middleware de manejo de errores global
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);  // Imprime la pila del error en la consola para depuración.
  res.status(500).send('Something broke!');  // Responde al cliente con un mensaje de error genérico.
});

app.listen(port, (): void => {
  console.log('SERVER IS UP ON PORT:', port);
})



