import { render } from '@testing-library/react';
import { PortfolioDetail } from 'pages/portofolio-detail';

test('Render Portfolio Detail', () => {
	const { container } = render(<PortfolioDetail />);
	expect(container).toMatchSnapshot()
});
