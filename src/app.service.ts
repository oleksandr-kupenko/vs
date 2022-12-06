import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  getVideoCards(): {id: string}[] {
    return [
      {id: uuidv4()}
    ];
  }
}
