import { XhrFactory } from '../xhrFactory'

const xhr2 = require('xhr2')

export class ServerXhr implements XhrFactory {
  build(): XMLHttpRequest {
    return new xhr2.XMLHttpRequest()
  }
}
