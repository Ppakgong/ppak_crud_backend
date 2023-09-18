import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number; // pk

  @Column()
  userId: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
