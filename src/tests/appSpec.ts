import supertest from 'supertest';
import app from '../app';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get("/image");
        expect(response.status).toBe(200);
    }
)});
describe('Test endpoint 404', () => {
    it('gets the api endpoint 404', async () => {
        const response = await request.get("/convert");
        expect(response.status).toBe(404);
    }
)});