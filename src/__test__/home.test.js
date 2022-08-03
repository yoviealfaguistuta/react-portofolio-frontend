import { render, screen } from '@testing-library/react';
import { Home } from 'pages';

test('Render Homepage', () => {
	jest.mock('lottie-web')

	render(<Home />);
	const linkElement = screen.getByText(/Yovie Alfa Guistuta/i);
	expect(linkElement).toBeInTheDocument();
});
