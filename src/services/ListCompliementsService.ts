import { getCustomRepository } from "typeorm"
import { CompliementsRepositories } from "../respositories/CompliementsRepositories"


class ListCompliementsService {

  async execute() {
    const compliementsRepositories = getCustomRepository(CompliementsRepositories)

    const retorno = await compliementsRepositories.find()

    return retorno
  }

}

export { ListCompliementsService }