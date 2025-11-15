const axios = require('axios');
const BASE_URL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use((request) => {
    console.log(`Making request to ${request.url}`);

    return request;
});

axios.interceptors.response.use((response) => {
    console.log(
        `Handling response from ${response.config.url} with status: ${response.status}`
    );

    return response;
});

describe('JsonPlacelder tests', () => {
    test('should create a new post and check response data', async () => {
        const body = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };

        const response = await axios.post(`${BASE_URL}/posts`, body);
        const data = response.data;

        expect(data.title).toBe(body.title);
        expect(data.body).toEqual(body.body);
        expect(data.userId).toEqual(body.userId);
        expect(data.id).toBeDefined();
        expect(typeof data.id).toStrictEqual('number');
        expect(response.status).toEqual(201);
    });

    test('should create a new empty post', async () => {
        const body = {};
        const response = await axios.post(`${BASE_URL}/posts`, body);
        const data = response.data;

        expect(response.status).toEqual(201);
        expect(data.title).toBeUndefined();
        expect(data.body).toBeUndefined();
        expect(data.userId).toBeUndefined();
    });

    test('should get post list and check userId', async () => {
        const response = await axios.get(`${BASE_URL}/posts`);

        expect(response.status).toBe(200);
        expect(response.data[0].userId).toBe(1);
    });

    test('should find user by email in comments and check the comment response', async () => {
        const response = await axios.get(`${BASE_URL}/posts/1/comments`);
        expect(response.status).toBe(200);

        const comment = response.data.find(
            (element) => element.email === 'Nikita@garfield.biz'
        );

        expect(comment).toBeDefined();
        expect(comment.name).toEqual('odio adipisci rerum aut animi');
        expect(comment.body).toEqual(
            'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione'
        );
    });

    test('should find user by name in comments and check email and Id', async () => {
        const response = await axios.get(`${BASE_URL}/comments?postId=1`);
        expect(response.status).toEqual(200);

        const comment = response.data.find(
            (element) => element.name === 'alias odio sit'
        );

        expect(comment).toBeDefined();
        expect(comment.email).toEqual('Lew@alysha.tv');
        expect(comment.id).toBe(4);
    });

    test('should check that user with fake name is not exist', async () => {
        const response = await axios.get(`${BASE_URL}/comments?postId=1`);
        expect(response.status).toEqual(200);

        const comment = response.data.find(
            (element) => element.name === 'not found'
        );

        expect(comment).toBeUndefined();
    });

    test('should update title in post', async () => {
        const originalPost = await axios.get(`${BASE_URL}/posts/1`);
        expect(originalPost.status).toEqual(200);

        const updatedPost = { ...originalPost.data };
        updatedPost.title = 'foo';

        const postAfterPut = await axios.put(
            `${BASE_URL}/posts/1`,
            updatedPost
        );

        expect(postAfterPut.status).toEqual(200);
        expect(postAfterPut.data.title).not.toBe(originalPost.data.title);
        expect(postAfterPut.data.title).toBe(updatedPost.title);
        expect(postAfterPut.data.userId).toBe(updatedPost.userId);
        expect(postAfterPut.data.id).toBe(updatedPost.id);
        expect(postAfterPut.data.body).toBe(updatedPost.body);
    });

    test('should remove post by Id', async () => {
        const response = await axios.delete(`${BASE_URL}/posts/1`);

        expect(response.status).toBe(200);
        expect(response.data.title).toBeUndefined();
        expect(response.data.body).toBeUndefined();
        expect(response.data.userId).toBeUndefined();
        expect(response.data.id).toBeUndefined();
    });
});
