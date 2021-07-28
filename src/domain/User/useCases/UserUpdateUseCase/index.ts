import { UserRepository } from "../../repository/implementation";
import { UserUpdateUseCase } from "./UserUpdateUseCase";
import { UserUpdateUseCaseController } from "./UserUpdateUseCase.controller";

const repository = new UserRepository();
const useCase = new UserUpdateUseCase(repository);
const updateUser = new UserUpdateUseCaseController(useCase);

export { updateUser };
