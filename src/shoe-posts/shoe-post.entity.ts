import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShoePost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand_id: number;

  @Column()
  condition: string;

  @Column()
  size: string;

  @Column({ default: 'soccer' })
  sport: string;
}