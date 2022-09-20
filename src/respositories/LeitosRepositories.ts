import { EntityRepository, Repository } from "typeorm";
import { Tag } from '../entities/Leitos'

@EntityRepository(Tag)
class LeitosRepositories extends Repository<Tag> { }

export { LeitosRepositories }