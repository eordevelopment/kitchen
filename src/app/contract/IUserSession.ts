import { ServiceError } from 'app/classes/error';

export interface IUserSession {
  id: number;
  fullName: string;
  givenName: string;
  familyName: string;
  email: string;
  imageUrl: string;
  userToken: string;
  googleToken: string;
  loginError: ServiceError;
}
