import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  Index,
} from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Booking } from '../../bookings/entities/booking.entity';

@Entity('listings')
export class Listing extends BaseEntity {

  @Index()
  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  location: string;

  @ManyToOne(() => User, (user) => user.listings, {
    onDelete: 'CASCADE',
  })
  host: User;

  @OneToMany(() => Booking, (booking) => booking.listing)
  bookings: Booking[];
}