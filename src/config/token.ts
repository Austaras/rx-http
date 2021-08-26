import { container } from 'tsyringe'

export const PLATFORM_ID = Symbol('Platform ID')
export const DOCUMENT = Symbol('DocumentToken')

export const CONTAINER = Symbol('inject container')

container.register(CONTAINER, { useValue: container })
