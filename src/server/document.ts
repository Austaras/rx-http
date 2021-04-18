import domino from 'domino'
import { DependencyContainer } from 'tsyringe'

function parseDocument(html: string, url = '/') {
  const window = domino.createWindow(html, url)
  const doc = window.document
  return doc
}

export function _document(_: DependencyContainer) {
  return parseDocument('<html><head><title>fakeTitle</title></head><body></body></html>')
}
