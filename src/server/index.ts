import { container, instanceCachingFactory } from 'tsyringe'

import { DOCUMENT } from '../config/token'
import { XhrFactory } from '../xhrFactory'
import { _document } from './document'
import { ServerXhr } from './xhrFactory'

container.register(XhrFactory as any, { useClass: ServerXhr })
container.register(DOCUMENT, { useFactory: instanceCachingFactory(_document) })
