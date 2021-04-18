import { container, instanceCachingFactory } from 'tsyringe'

import { XhrFactory } from '../xhrFactory'
import { _document } from './document'
import { ServerXhr } from './xhrFactory'

container.register(XhrFactory as any, { useClass: ServerXhr })
container.register('dsf', { useFactory: instanceCachingFactory(_document) })
