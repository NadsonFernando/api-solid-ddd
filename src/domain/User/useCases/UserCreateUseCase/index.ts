import { UserRepository } from "../../repository/implementation";
import { UserCreateUseCase } from "./UserCreateUseCase";
import { UserCreateUseCaseController } from "./UserCreateUseCase.controller";

const repository = new UserRepository();
const useCase = new UserCreateUseCase(repository);
const create = new UserCreateUseCaseController(useCase);

export { create };
