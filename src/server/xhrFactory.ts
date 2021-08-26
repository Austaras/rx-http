import { registry } from 'tsyringe'
import { XhrFactory } from '../xhrFactory'

const xhr2 = require('xhr2')

@registry([{ token: XhrFactory as any, useClass: ServerXhr }])
export class ServerXhr implements XhrFactory {
  build(): XMLHttpRequest {
    return new xhr2.XMLHttpRequest()
  }
}
