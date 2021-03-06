/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import HeaderItemText from './HeaderItemText';

describe('HeaderItemText', () => {
  it('renders default styling', () => {
    const { container } = render(<HeaderItemText />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item__text');
  });

  it('renders clipped styling if provided', () => {
    const { container } = render(<HeaderItemText clipped />);

    expect(container.firstChild).toHaveClass('is-clipped');
  });
});
