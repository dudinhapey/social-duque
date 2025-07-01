import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm'
import { User } from './user'
import { Post } from './post'

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar' })
    content!: string

    @ManyToOne(() => User, user => user.comments)
    author!: User

    @ManyToOne(() => Post, post => post.comments)
    post!: Post

    @CreateDateColumn()
    created_at!: Date

}
