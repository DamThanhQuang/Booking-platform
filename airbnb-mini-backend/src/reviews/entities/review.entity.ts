import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { Booking } from '../../bookings/entities/booking.entity';

@Entity('reviews')
export class Review extends BaseEntity {

  @Column({
    type: 'int',
  })
  rating: number;

  @Column('text')
  comment: string;

  @OneToOne(() => Booking)
  @JoinColumn()
  booking: Booking;
}