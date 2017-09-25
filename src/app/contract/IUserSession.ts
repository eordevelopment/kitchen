import { ServiceError } from 'app/classes/error';
import { IAuthResponse } from 'app/contract/IAuthResponse';

export interface IUserSession {
  id: number;
  fullName: string;
  givenName: string;
  familyName: string;
  email: string;
  imageUrl: string;
  userAuth: IAuthResponse;
  googleToken: string;
}
