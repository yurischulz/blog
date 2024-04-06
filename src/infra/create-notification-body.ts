import { IsNotEmpty, IsUUID, Length } from 'class-validator';
export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @Length(5, 256)
  content: string;

  @IsNotEmpty()
  category: string;
}
