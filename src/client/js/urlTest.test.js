import { checkForUrl } from './urlChecker'

test('checking module', () => {
    expect(checkForUrl('https://www.udacity.com')).toBe(true)
    expect(checkForUrl('udacity.com')).toBe(false)
})