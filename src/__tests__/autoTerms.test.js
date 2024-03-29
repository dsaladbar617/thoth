import { createMocks } from 'node-mocks-http';
import termHandler from '../pages/api/get_auto_terms';

describe('/api/get_shops', () => {
	test('return 5 shop objects', async () => {
		const { req, res } = createMocks({
			method: 'GET'
		});

		await termHandler(req, res);
		expect(res._getStatusCode()).toBe(200);
		expect(JSON.parse(res._getData())).toHaveLength(135);
	});
});
