import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signin() {
    return { msg: 'I have signed up' };
  }

  signup() {
    return { msg: 'I have signed in' };
  }

  update() {
    return { msg: 'User updated successfully'}
  }

  delete() {
    return { msg: 'User deleted successfully'}
  }
}
