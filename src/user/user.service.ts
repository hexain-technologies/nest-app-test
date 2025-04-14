import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private user = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' },
    { id: 4, name: 'Jack Doe' },
  ];

  getUser(): { id: number; name: string }[] {
    return this.user;
  }
}
