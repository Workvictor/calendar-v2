import React from 'react';
import { render } from '@testing-library/react';

import { App } from './App';

describe('unit test App', () => {
  it('should match snapshot', () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
