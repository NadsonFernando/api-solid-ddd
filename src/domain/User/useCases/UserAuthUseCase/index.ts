import { UserRepository } from "../../repository/implementation";
import { UserAuthUseCase } from "./UserAuthUseCase";
import { UserAuthUseCaseController } from "./UserAuthUseCase.controller";

const repository = new UserRepository();
const useCase = new UserAuthUseCase(repository);
const authenticate = new UserAuthUseCaseController(useCase);

export { authenticate };
