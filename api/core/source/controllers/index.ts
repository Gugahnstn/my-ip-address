import { Request, Response } from "express";

export const requestIp = (request: Request, response: Response) => {
  const ip = request.ip;
  response.json({query: ip});
};
