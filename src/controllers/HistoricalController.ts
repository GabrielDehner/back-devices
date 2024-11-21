import { Request, Response } from "express";
import connection from "../db/dbconfig";

class HistoricalController {
  public async getByDeviceId(req: Request, res: Response): Promise<any> {
    try {
      const deviceId = req.params.id
      const [rows]: any = await connection.execute(
        "SELECT * FROM historical WHERE device_id = ?",
        [deviceId]
      );
      return res.json(rows);
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

export default new HistoricalController();
