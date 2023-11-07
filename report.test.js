const {sortPages} = require('./report')
const {test, expect} = require('@jest/globals')

test('sortPages', () => {
    const input = {
        'http://wagslane.dev/path': 1,
        'http://wagslane.dev': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['http://wagslane.dev', 3],
        ['http://wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expected)

})