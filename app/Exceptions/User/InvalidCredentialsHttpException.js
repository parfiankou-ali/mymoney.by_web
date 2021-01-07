import {HttpException} from '~/app/Exceptions/HttpException'

export class InvalidCredentialsHttpException extends HttpException {
  static get StatusCode() {
    return 100001;
  }
}
