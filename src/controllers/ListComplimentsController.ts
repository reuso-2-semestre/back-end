import { Request, Response } from 'express'
import { ListCompliementsService } from '../services/ListCompliementsService'

class ListCompliementsController {
  async handle(req: Request, res: Response) {
    const listCompliements = new ListCompliementsService()

    const resposta = await listCompliements.execute()

    res.json(resposta)
  }
}

export { ListCompliementsController }