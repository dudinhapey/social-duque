import { FastifyReply, FastifyRequest } from 'fastify'
import { UsersRepository } from '../repositories/users/UsersRepositoriesImpl'
import { ListUsersUseCase } from '../usecases/users/ListUserUseCase'

const userRepo = new UsersRepository()

export class ListUsersController{
    async handle(request: FastifyRequest, reply: FastifyReply){
            const usecase = new ListUsersUseCase(userRepo)
            const result = await usecase.execute()
            return reply.status(200).send(result)
           
       
    }
}