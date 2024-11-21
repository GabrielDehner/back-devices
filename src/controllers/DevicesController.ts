import { Request, Response } from "express";
import connection from "../db/dbconfig";

class DevicesController {
  public async getByUserId(req: Request, res: Response): Promise<any> {
    try {
      const userId = req.params.id
      const [rows]: any = await connection.execute(
        "SELECT * FROM devices WHERE user_id = ?",
        [userId]
      );
      return res.json(rows);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default new DevicesController();
