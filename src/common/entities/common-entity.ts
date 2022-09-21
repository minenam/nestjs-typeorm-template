import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * @code writer 남혜민
 * @description Entity 기본 형태
 */
export abstract class CommonEntity extends BaseEntity {
  @ApiProperty({
    example: '2022-07-13T04:22:24.489Z',
    description: '생성시점',
    required: false,
  })
  @CreateDateColumn({
    type: 'timestamp',
    comment: '생성시점',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2022-07-13T04:22:24.489Z',
    description: '수정시점',
    required: false,
  })
  @UpdateDateColumn({ type: 'timestamp', comment: '수정일' })
  updatedAt: Date;

  @ApiProperty({
    example: '2022-07-13T04:22:24.489Z',
    description: '삭제시점',
    required: false,
  })
  @Exclude()
  @DeleteDateColumn({ type: 'timestamp', comment: '삭제일' })
  deletedAt?: Date | null;
}