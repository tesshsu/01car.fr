export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}


/**
 * Get query string
 *
 * @param   {*}   query   query object (any object that Object.entries() can handle)
 * @returns {string}      query string
 */
export function querystring(query = {}) {
    // get array of key value pairs ([[k1, v1], [k2, v2]])
    const qs = Object.entries(query)
    // filter pairs with undefined value
        .filter(pair => pair[1] !== undefined)
        // encode keys and values, remove the value if it is null, but leave the key
        .map(pair => pair.filter(i => i !== null).map(encodeURIComponent).join('='))
        .join('&');

    return qs && '?' + qs;
}