import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm'
import { Post } from './post'
import { Comment } from './comments'

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column({ type: 'varchar', length: 100 })
    name!: string

    @Column({ type: 'varchar', unique: true })
    email!: string

    @Column({ type: 'varchar', unique: true, length: 15 })
    phone!: string

    @Column({ type: 'varchar', nullable: false, length: 15 })
    password!: string

    @CreateDateColumn()
    created_at!: Date
    @OneToMany(() => Post, post => post.author)
    posts!: Post[]
    @OneToMany(() => Comment, comment => comment.author)
    comments!: Comment[]

}
