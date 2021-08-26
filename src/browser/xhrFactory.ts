import { registry } from 'tsyringe'
import { XhrFactory } from '../xhrFactory'

// https://github.com/microsoft/tsyringe/issues/108
@registry([{ token: XhrFactory as any, useClass: BrowserXhr }])
export class BrowserXhr implements XhrFactory {
  build(): XMLHttpRequest {
    return new XMLHttpRequest()
  }
}
