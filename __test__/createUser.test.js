const app = require('../app');
const request = require('supertest');
const db = require('../models');


const appRequest = request(app);

const getUser = () => ({
    firstName: "Test",
    lastName: "Tester",
    email: `test${Date.now()}@mail.com`,
    birthday: "2022-01-20",
    password:"adwer42343"
});

const user = getUser();

describe('create new user', () => {
    test('user create succesfully expect 201', async () => {
        const response = await appRequest.post('/api/users/').send(user);
        expect(response.statusCode).toBe(201);
        db.sequelize.close();
    })
})