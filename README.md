
# Eco Web Compass - Website Sustainability Analyzer

Eco Web Compass is a web application that helps users analyze the environmental impact of websites and provides actionable recommendations to improve digital sustainability.

![Eco Web Compass Screenshot](https://via.placeholder.com/800x400?text=Eco+Web+Compass+Screenshot)

## Features

- **Website Analysis:** Enter any URL to analyze its sustainability metrics
- **Comprehensive Scoring:** Get detailed scores for performance, page weight, carbon footprint, hosting, and best practices
- **Actionable Recommendations:** Receive specific suggestions to improve your website's sustainability
- **Export Options:** Download your sustainability report as PDF or CSV
- **Responsive Design:** Works on desktop, tablet, and mobile devices

## Live Demo

You can try the live demo application at: [https://eco-web-compass.lovable.app](https://eco-web-compass.lovable.app)

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Lovable-eco-web-compass.git
   cd eco-web-compass
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
eco-web-compass/
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── ui/            # Shadcn UI components
│   │   └── ...            # Custom components
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── types/             # TypeScript definitions
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Application entry point
├── public/                # Static assets
└── ...                    # Configuration files
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [React Query](https://tanstack.com/query/latest) - Data fetching and state management
- [jsPDF](https://github.com/parallax/jsPDF) - PDF generation
- [Lucide React](https://lucide.dev/) - Icon library

## Customization

### Theming

The application uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.ts` file.

### API Integration

By default, the application uses a mock service for website analysis. To integrate with a real API:

1. Update the `analysisService.ts` file in `src/services/` directory
2. Modify the API endpoints and data processing logic

## Deployment

### Building for Production

```sh
npm run build
# or
yarn build
```

This will generate a production-ready build in the `dist` directory.

### Deploying to a Static Host

You can deploy the contents of the `dist` directory to any static hosting provider like Netlify, Vercel, GitHub Pages, or AWS S3.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Lovable](https://lovable.dev) - The AI-powered editor used to create this application
- All contributors and open source libraries used in this project

## Contact

For questions or feedback, please open an issue in the GitHub repository.
