import { getCustomRepository } from "typeorm"
import { LeitosRepositories } from "../respositories/LeitosRepositories"

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const leitosRepositories = getCustomRepository(LeitosRepositories);

    if (!name) {
      throw new Error("Name is incorrect!");
    }

    const tagExists = await leitosRepositories.findOne({
      name
    })

    if (tagExists) {
      throw new Error("Tag already exists!")
    }

    const tag = leitosRepositories.create({
      name
    })

    await leitosRepositories.save(tag);

    return tag;

  }
}

export { CreateTagService }