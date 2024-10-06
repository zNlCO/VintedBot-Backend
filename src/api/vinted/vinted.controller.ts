import { Request, Response, NextFunction } from 'express';
import vintedService from './vinted.service';

export const search = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchResults = await vintedService.search();
        res.json(searchResults);
      } catch(err) {
        next(err);
      }
}
