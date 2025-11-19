const axios = require('axios');

jest.mock('axios');

test('Mocking resolved value in Jest', async () => {
    const fakeResponse = {
        status: 200,
        data: {
            name: 'Bob',
            age: 33,
        },
    };
    axios.get.mockResolvedValueOnce(fakeResponse);

    const response = await axios.get('https://www.google.com/');

    expect(response).toEqual(fakeResponse);
    expect(axios.get).toHaveBeenCalledWith('https://www.google.com/');
});

test('Mocking rejected value in Jest', async () => {
    axios.get.mockRejectedValueOnce(
        new Error('Request failed with status code 404')
    );

    await expect(axios.get('https://www.google.com/')).rejects.toMatchObject({
        message: 'Request failed with status code 404',
    });
});
