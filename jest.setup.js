import '@testing-library/jest-dom';
import React from 'react';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
    };
  },
  usePathname() {
    return '';
  },
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: function Image(props) {
    return {
      type: 'img',
      props: props
    };
  },
})); 