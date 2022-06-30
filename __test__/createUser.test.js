const app = require('../app');
const request = require('supertest');
const db = require('../models');
const yup = require('yup');

const appRequest = request(app);

const bodySchema = yup.object({
    data: yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().email().required(),
        birthday: yup.date(),
        password: yup.string(),
    })
});

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
        expect(bodySchema.isValidSync(response.body)).toBe(true);
    });
    test('create empty user expect 400', async () => {
        const response = await appRequest.post('/api/users/').send({});
        expect(response.statusCode).toBe(400);
    });
    test('user create again expect 409', async () => {
        const response = await appRequest.post('/api/users/').send(user);
        expect(response.statusCode).toBe(409);
    });
});

// Get user:
/// get user by id expect 200 successfully
/// get user by absand id expect 404

describe('get user', () => {
    test('get user succesfully expect 200', async () => {
        const response = await appRequest.get('/api/users/1');
        expect(response.statusCode).toBe(200);
        expect(bodySchema.isValidSync(response.body)).toBe(true);
    });
    test(' user by absand id expect 404', async () => {
        const response = await appRequest.get('/api/users/125');
        expect(response.statusCode).toBe(404);
    });
});


afterAll(() => {
    db.sequelize.close();
  });