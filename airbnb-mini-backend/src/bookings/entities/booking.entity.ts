import {
  Entity,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { User } from '../../users/entities/user.entity';
import { Listing } from '../../listings/entities/listing.entity';
import { Payment } from '../../payments/entities/payment.entity';
import { Review } from '../../reviews/entities/review.entity';

@Entity('bookings')
export class Booking extends BaseEntity {

  @ManyToOne(() => User, (user) => user.bookings, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Listing, (listing) => listing.bookings, {
    onDelete: 'CASCADE',
  })
  listing: Listing;

  @Column({
    type: 'date',
  })
  checkIn: Date;

  @Column({
    type: 'date',
  })
  checkOut: Date;

  @Column('decimal')
  totalPrice: number;

  @OneToOne(() => Payment, (payment) => payment.booking)
  payment: Payment;

  @OneToOne(() => Review, (review) => review.booking)
  review: Review;
}