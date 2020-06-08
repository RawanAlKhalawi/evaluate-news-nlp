import { checkForName } from './nameChecker'

test('checking module', () => {
    expect(checkForName('Georgiou')).toBe(true)
    expect(checkForName('Rawan')).toBe(false)
})