const axios = require('axios');

function invalidRequest() {
    return axios.get('https://httpbin.org/not-existed-url-path');
}

test('handling error', async () => {
    await expect(invalidRequest()).rejects.toThrow(
        'Request failed with status code 404'
    );
});
