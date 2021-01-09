import {HttpException} from '~/app/Exceptions/HttpException'

export class ValidationErrorHttpException extends HttpException {
  static get StatusCode() {
    return 422;
  }
}
