import { Request, Response } from "express";
import connection from "../db/dbconfig";
import bcrypt from 'bcrypt';

class UsersController {
  public async register(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during registration:', error);
      return res.status(500).json({ message: 'Server error.', detail:error });
    }
  }
  public async login(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send("Por favor, proporciona un usuario y una contraseña");
    }

    try {
      const [rows]: any = await connection.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (rows.length === 1) {
        const isPasswordValid = await bcrypt.compare(password, rows[0].password);
        if (!isPasswordValid) {
          return res.status(401).json({ message: "Invalid credentials." });
        }
        return res.json({ message: "Login exitoso" });
      } else {
        return res.status(401).send({ message: "Usuario o contraseña incorrectos" });
      }
    } catch (error) {
      console.error("Error en la consulta de login:", error);
      return res.status(500).send("Error en el servidor");
    }
  }
}

export default new UsersController();
