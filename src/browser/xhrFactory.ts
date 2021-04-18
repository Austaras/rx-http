import { XhrFactory } from '../xhrFactory'

export class BrowserXhr implements XhrFactory {
  build(): XMLHttpRequest {
    return new XMLHttpRequest()
  }
}
