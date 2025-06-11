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

## Features

- Responsive design
- Interactive rain effect with CSS animations
- Ambient rain sound with volume control
- Modern, clean UI with blur effects
- Server-side rendering for optimal performance

## Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add the rain sound file:
   - Place `rain.mp3` in the `public` directory

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── layout.js       # Root layout with rain effect
│   └── page.js         # Home page
├── public/             # Static files
│   └── rain.mp3        # Rain sound effect
├── styles/             # Global styles
│   └── globals.css     # Global CSS
└── components/         # React components
```

## Customization

### Rain Effect
- Adjust the number of raindrops by modifying `NUM_DROPS` in `app/layout.js`
- Customize rain appearance in `styles/globals.css` under `.drop` class

### Sound
- Replace `public/rain.mp3` with your preferred ambient sound
- Adjust volume slider behavior in `app/layout.js`

## Performance Considerations

- The rain effect uses CSS animations for optimal performance
- Audio is loaded only when needed
- Server components are used where possible
- Images are optimized using Next.js Image component

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.