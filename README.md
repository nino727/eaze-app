# Ease App

A modern mental health exercise tracking application built with React Native and Expo.

## Important Notice

**Medical Disclaimer**: This application is designed as a supplementary tool for mental health exercises and is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read or used in this application.

## Features

- 🧘‍♂️ Guided breathing exercises
- 📊 Exercise tracking and history
- 🎯 Progress monitoring
- 🌙 Dark mode support
- 🔐 Secure authentication
- 📱 Cross-platform (iOS & Android)

## Tech Stack

- React Native
- Expo
- TypeScript
- Supabase
- React Navigation
- Restyle (Theme)
- React Native Reanimated
- Expo AV

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nino727/eaze-app.git
cd eaze-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your credentials:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
EAS_PROJECT_ID=your_eas_project_id
```

5. Start the development server:
```bash
npm start
```

## Development

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web

## Building

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to your Expo account:
```bash
eas login
```

3. Configure the build:
```bash
eas build:configure
```

4. Build for platforms:
```bash
eas build --platform ios
eas build --platform android
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [Supabase](https://supabase.io/)
- [shadcn/ui](https://ui.shadcn.com/) for design inspiration 