import {HttpException} from '~/app/Exceptions/HttpException'

export class InternalErrorHttpException extends HttpException {
  static get StatusCode() {
    return 500;
  }
}
