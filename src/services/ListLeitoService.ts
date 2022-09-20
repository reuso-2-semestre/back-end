import { getCustomRepository } from "typeorm"
import { LeitosRepositories } from "../respositories/LeitosRepositories"


class ListTagService {
  async execute() {
    const leitosRepositories = getCustomRepository(LeitosRepositories)

    const dados = await leitosRepositories.find()

    return dados
  }
}

export { ListTagService }