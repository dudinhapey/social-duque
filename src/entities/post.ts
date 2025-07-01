import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from './user'
import { Comment } from './comments'

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar' })
    content!: string

    @ManyToOne(() => User, user => user.posts)
    author!: User

    @OneToMany(() => Comment, comment => comment.post)
    comments!: Comment[]

    @CreateDateColumn()
    created_at!: Date

}
