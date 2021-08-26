import { container, instanceCachingFactory } from 'tsyringe'

import { DOCUMENT } from '../config/token'
import { _document } from './document'

container.register(DOCUMENT, { useFactory: instanceCachingFactory(_document) })
