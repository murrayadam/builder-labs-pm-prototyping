# Fusion Starter Demo

A demonstration application showcasing Builder.io's Fusion product capabilities. This project serves as a hands-on learning environment for Product Managers to explore rapid prototyping and development workflows.

## About This Demo

This is a fully functional restaurant ordering application built to demonstrate how Product Managers can quickly prototype and iterate on digital products using Builder.io's Fusion platform. The demo includes:

- **Restaurant Menu System** - Browse categories, filter items, and view detailed product information
- **Shopping Cart** - Add items, manage quantities, and calculate totals
- **Order Management** - Complete checkout flow and order tracking
- **Responsive Design** - Mobile-first design that works across all devices
- **Real-time Updates** - Interactive UI with instant feedback

## For Product Managers

This demo illustrates how Fusion enables rapid prototyping without extensive technical knowledge:

- **Visual Development** - Build and modify UI components through natural language
- **Instant Feedback** - See changes reflected immediately in the live preview
- **No Code Barriers** - Focus on product logic and user experience, not technical implementation
- **Professional Results** - Generate production-quality code that developers can extend

## Technology Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Express.js server with REST API
- **UI Components**: Radix UI + Custom component library
- **Development**: Vite for fast builds and hot reload
- **Testing**: Vitest for unit and integration tests

## Development & Contributing

### Prerequisites

- Node.js 18+ 
- pnpm (preferred package manager)

### Getting Started

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Start Development Server**
   ```bash
   pnpm dev
   ```
   This starts both the frontend (React) and backend (Express) on port 8080.

3. **Run Tests**
   ```bash
   pnpm test
   ```

4. **Build for Production**
   ```bash
   pnpm build
   ```

### Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components
├── components/           # Reusable UI components
│   ├── ui/              # Base UI component library
│   └── ...              # Feature-specific components
├── data/                # Mock data and constants
└── App.tsx              # Main app with routing

server/                   # Express API backend
├── routes/              # API route handlers
└── index.ts             # Server configuration

shared/                   # Shared TypeScript types
└── api.ts               # API interfaces
```

### Contributing Guidelines

1. **Component Development**
   - Follow existing patterns in `client/components/ui/`
   - Use TypeScript for all new components
   - Implement responsive design with Tailwind CSS
   - Break complex components into smaller, reusable units

2. **API Development**
   - Add new routes to `server/routes/`
   - Define shared types in `shared/api.ts`
   - Follow RESTful conventions
   - Include proper error handling

3. **Code Style**
   - Use the existing prettier configuration
   - Run `pnpm typecheck` before committing
   - Write tests for new features
   - Use semantic commit messages

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Create production build
- `pnpm start` - Run production server
- `pnpm test` - Execute test suite
- `pnpm typecheck` - Validate TypeScript
- `pnpm format.fix` - Auto-format code with Prettier

## Deployment

This application can be deployed to various platforms:

- **Netlify** - Connect via Builder.io's Netlify integration
- **Vercel** - Deploy through Builder.io's Vercel integration  
- **Self-hosted** - Use `pnpm build` and deploy the `dist/` folder

## Learning Resources

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [Fusion Product Guide](https://www.builder.io/c/docs/projects)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## Support

For questions about Builder.io Fusion or this demo:
- Review the [Builder.io Documentation](https://www.builder.io/c/docs/projects)
- Contact Builder.io support for technical assistance

---

*Built with ❤️ using Builder.io Fusion*
