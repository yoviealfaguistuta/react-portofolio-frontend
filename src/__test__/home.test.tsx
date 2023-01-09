import { render, screen } from '@testing-library/react';
import { getAbout } from 'api';
import { Home } from 'pages';

test('Render Homepage', () => {
	jest.mock('lottie-web')
	jest.mock('lottie-react')

	render(<Home />);
	const linkElement = screen.getByText(/Yovie Alfa Guistuta/i);
	expect(linkElement).toBeInTheDocument();
});

test('Fetch about API', async () => {
	const { data }: AboutResponse = await getAbout();
	expect(typeof data.about).toBe('string');
});