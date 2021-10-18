import { getStarWarsDataSingleAsync, getStarWarsDataAsync } from '../fetch'

jest.mock('node-fetch')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch') as jest.Mock
const dataFunc = jest.fn()
const loadingFunc = jest.fn()
const errorFunc = jest.fn()
describe('getStarWarsDataAsync', () => {
    it('calls the data and loading callbacks when done', async () => {
        fetch.mockReturnValue(Promise.resolve({ json: () => Promise.resolve({ results: [{ CAD: 1.42 }] }) }))
        
        await getStarWarsDataAsync('http://endpoint.com/url', dataFunc, errorFunc, loadingFunc)
        expect(loadingFunc).toHaveBeenCalled()
        expect(dataFunc).toHaveBeenCalled()
    })

    it('calls the error and loading callbacks when error occurs', async () => {
        fetch.mockReturnValue(Promise.resolve({ json: () => Promise.reject('An error occurred.') }))
        
        await getStarWarsDataAsync('http://endpoint.com/url', dataFunc, errorFunc, loadingFunc)
        expect(loadingFunc).toHaveBeenCalled()
        expect(errorFunc).toHaveBeenCalled()
    })
})

describe('getStarWarsDataSingleAsync', () => {
    it('calls the data and loading callbacks when done', async () => {
        fetch.mockReturnValue(Promise.resolve({ json: () => Promise.resolve({ CAD: 1.42 }) }))
        
        await getStarWarsDataSingleAsync('http://endpoint.com/url', dataFunc, errorFunc, loadingFunc)
        expect(loadingFunc).toHaveBeenCalled()
        expect(dataFunc).toHaveBeenCalled()
    })

    it('calls the error and loading callbacks when error occurs', async () => {
        fetch.mockReturnValue(Promise.resolve({ json: () => Promise.reject('An error occurred.') }))
        
        await getStarWarsDataSingleAsync('http://endpoint.com/url', dataFunc, errorFunc, loadingFunc)
        expect(loadingFunc).toHaveBeenCalled()
        expect(errorFunc).toHaveBeenCalled()
    })
})
