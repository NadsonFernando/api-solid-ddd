import { UserRepository } from "../../repository/implementation";
import { UserGetCurrentUseCase } from "./UserGetCurrentUseCase";
import { UserGetCurrentUseCaseController } from "./UserGetCurrentUseCase.controller";

const repository = new UserRepository();
const useCase = new UserGetCurrentUseCase(repository);
const getCurrentUser = new UserGetCurrentUseCaseController(useCase);

export { getCurrentUser };
