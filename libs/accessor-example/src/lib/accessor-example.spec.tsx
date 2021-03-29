import React from 'react';
import { render } from '@testing-library/react';

import AccessorExample from './accessor-example';

describe('AccessorExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccessorExample />);
    expect(baseElement).toBeTruthy();
  });
});
