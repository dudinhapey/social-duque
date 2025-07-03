import { FastifyInstance } from 'fastify'
import { CreateUserController } from '../controllers/CreateUserController'
import { ListUsersController } from '../controllers/ListUserController'
import { FindByIdController } from '../controllers/FindUserByIdController' 
import { DeleteUserController } from '../controllers/DeleteUserController'  
import { UpdateUserController } from '../controllers/UpdateUserController'


const listusercontroller = new ListUsersController()
const createcontroller = new CreateUserController()
const findByIdController = new FindByIdController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()

export async function userRoutes(app:FastifyInstance){

    app.post('/users', {
        schema: {
          tags: ['Usuários'],
          summary: 'Criar usuário',
          body: {
            type: 'object',
            required: ['name', 'email'],
            properties: {
              name: { type: 'string' },
              email: { type: 'string', format: 'email' }
            }
          },
          response: {
            201: {
              description: 'Usuário criado',
              type: 'object',
              properties: {
                id: { type: 'string' },
                name: { type: 'string' },
                email: { type: 'string' }
              }
            }
          }
        },
        handler: createcontroller.handle.bind(createcontroller)
      })
    app.get('/users', listusercontroller.handle)
    app.get('/users/:id', findByIdController.handle)
    app.put('/users/update/:id', updateUserController.handle)
    app.delete('/users/delete/:id', deleteUserController.handle)
   

}