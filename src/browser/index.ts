import { container, instanceCachingFactory } from 'tsyringe'

import { DOCUMENT } from '../config/token'

import { XhrFactory } from '../xhrFactory'
import { BrowserXhr } from './xhrFactory'

// https://github.com/microsoft/tsyringe/issues/108
container.register(XhrFactory as any, { useClass: BrowserXhr })
container.register(DOCUMENT, { useFactory: instanceCachingFactory(() => document) })
