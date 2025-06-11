# Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring a dynamic rain effect and ambient sound.

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript/JavaScript
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
- **UI Components**: 
  - Shadcn UI
  - Radix UI
- **Animation**: CSS Animations
- **Audio**: HTML5 Audio API
- **Testing**: Jest + React Testing Library

## Features

- Responsive design
- Interactive rain effect with CSS animations
- Ambient rain sound with volume control
- Modern, clean UI with blur effects
- Server-side rendering for optimal performance
- Comprehensive test coverage
- Contact form with validation and error handling

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/tvanwagener99/tvanwagener.github.io.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Workflow

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

### Code Quality
```bash
# Run linter
npm run lint

# Format code
npm run format
```

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.js       # Root layout with rain effect
│   ├── page.js         # Home page
│   └── contact/        # Contact page and tests
├── components/         # Reusable React components
├── public/            # Static files
│   └── rain.mp3       # Rain sound effect
├── styles/            # Global styles
│   └── globals.css    # Global CSS
├── scripts/           # Build and utility scripts
├── jest.setup.js      # Jest configuration
└── babel.config.js    # Babel configuration
```

## Testing

The project uses Jest and React Testing Library for testing. Key testing features:

- Component rendering tests
- User interaction tests
- Form validation tests
- API integration tests
- Error handling tests

Example test structure:
```javascript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test implementation
  });

  it('should handle user interactions', () => {
    // Test implementation
  });
});
```

## Development Guidelines

### Code Style
- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Testing
- Write tests for new features
- Maintain existing test coverage
- Test both success and error cases
- Use React Testing Library best practices

### Git Workflow
1. Create feature branches from `main`
2. Write clear commit messages
3. Update tests and documentation
4. Create pull requests for review

### Performance
- Use Next.js Image component for images
- Implement proper code splitting
- Optimize animations and effects
- Monitor bundle size

## Customization

### Rain Effect
- Adjust the number of raindrops by modifying `NUM_DROPS` in `app/layout.js`
- Customize rain appearance in `styles/globals.css` under `.drop` class

### Sound
- Replace `public/rain.mp3` with your preferred ambient sound
- Adjust volume slider behavior in `app/layout.js`

## Troubleshooting

### Common Issues
1. **Build fails**
   - Clear `.next` directory
   - Run `npm install` again
   - Check Node.js version

2. **Tests fail**
   - Clear Jest cache
   - Check test environment setup
   - Verify test dependencies

3. **Rain effect not working**
   - Check browser console for errors
   - Verify CSS animations
   - Check sound file path

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.