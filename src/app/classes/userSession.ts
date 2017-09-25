import { IUserSession } from 'app/contract/IUserSession';
import { ServiceError } from 'app/classes/error';
import { IAuthResponse } from 'app/contract/IAuthResponse';

export class UserSession implements IUserSession {
  public id: number;
  public fullName: string;
  public givenName: string;
  public familyName: string;
  public email: string;
  public imageUrl: string;
  public userAuth: IAuthResponse;
  public googleToken: string;

  constructor(source?: any) {
    if (source) {
      this.id = source.getId();
      this.fullName = source.getName();
      this.givenName = source.getGivenName();
      this.familyName = source.getFamilyName();
      this.email = source.getEmail();
      this.imageUrl = source.getImageUrl();
      this.userAuth = null;
    }
  }
}
