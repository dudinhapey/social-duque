import { User } from "../../entities/user" 
import { IUsersRepository } from "../../repositories/users/IUsersRepositories" 

export class ListUsersUseCase{
  constructor(private userRepository:IUsersRepository){}
  async execute():Promise<Omit<User, 'password'>[]>{
    const users = await this.userRepository.findAll()
    return users.map(({password, ...user})=>user)
  }
}