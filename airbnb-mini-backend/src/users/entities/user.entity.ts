import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { Listing } from '../../listings/entities/listing.entity';
import { Booking } from '../../bookings/entities/booking.entity';
import { UserRole } from '../enums/user-role.enum';
import { AuthProvider } from '../enums/auth-provider.enum';

@Entity('users')
export class User extends BaseEntity {

  @Column()
  name: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true, select: false })
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.GUEST })
  role: UserRole;

  // ── Social Login ──────────────────────────────
  @Column({ type: 'enum', enum: AuthProvider, default: AuthProvider.LOCAL })
  provider: AuthProvider;

  @Column({ nullable: true })
  providerId: string;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: true })
  isActive: boolean;
  // ─────────────────────────────────────────────

  @OneToMany(() => Listing, (listing) => listing.host)
  listings: Listing[];

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];
}