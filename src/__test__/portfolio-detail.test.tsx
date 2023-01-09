import { render } from '@testing-library/react';
import { getPortfolioDetail } from 'api';
import Detail from 'pages/Detail';

test('Fetch portfolio detail with correct id', async () => {
	const { data } = await getPortfolioDetail(1);
	expect(data.id).toBe(1);
});

test('Fetch portfolio detail with wrong id', async () => {
	// eslint-disable-next-line jest/no-conditional-expect
	return getPortfolioDetail(-1).catch(e => expect(e).toMatch('error'));
});

test('Render check after async', async () => {
	try {
		await getPortfolioDetail(1);
		const { container } = render(<Detail />);
		expect(container).toMatchSnapshot()
	} catch (e) {
		// eslint-disable-next-line jest/no-conditional-expect
		expect(e).toMatch('error');
	}
});