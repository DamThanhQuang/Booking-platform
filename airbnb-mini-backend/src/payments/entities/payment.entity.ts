import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { Booking } from '../../bookings/entities/booking.entity';
import { PaymentStatus } from '../enums/payment-status.enum';

@Entity('payments')
export class Payment extends BaseEntity {

  @Column('decimal')
  amount: number;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;

  @OneToOne(() => Booking)
  @JoinColumn()
  booking: Booking;
}