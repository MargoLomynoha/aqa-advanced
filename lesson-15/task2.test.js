const axios = require('axios');

const HEADER_VALUE = 'some value';

function headerRequest() {
    return axios.get(
        'https://api.oceandrivers.com:443/v1.0/getAemetStation/aeropuertopalma/lastdata/?someSuperQueryParam=true',
        {
            headers: {
                'custom-header': HEADER_VALUE,
            },
        }
    );
}

test('check headers and parameters in request', async () => {
    const response = await headerRequest();
    const expectedHeader = response.config.headers['custom-header'];

    expect(expectedHeader).toBeDefined();
    expect(expectedHeader).toEqual(HEADER_VALUE);
    expect(response.config.url).toContain('someSuperQueryParam=true');
});
