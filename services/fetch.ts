import fetch from 'node-fetch'

export async function getStarWarsDataAsync<T>(endpoint: string,
    callback: React.Dispatch<React.SetStateAction<T[]>>,
    errorCallback: React.Dispatch<React.SetStateAction<string>>,
    loadingCallback:  React.Dispatch<React.SetStateAction<boolean>>): Promise<void> {
    try {
        const resp = await fetch(endpoint)
        const json = await resp.json()
        callback(json.results)
    } catch (err) {
        errorCallback(err)
    } finally {
        loadingCallback(false)
    }
}

export async function getStarWarsDataSingleAsync<T>(endpoint: string,
    callback: React.Dispatch<React.SetStateAction<T>>,
    errorCallback: React.Dispatch<React.SetStateAction<string>>,
    loadingCallback:  React.Dispatch<React.SetStateAction<boolean>>): Promise<void> {
    try {
        const resp = await fetch(endpoint)
        const json = await resp.json()
        callback(json)
    } catch (err) {
        errorCallback(err)
    } finally {
        loadingCallback(false)
    }
}
