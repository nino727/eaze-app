# Ease App

A mobile application for managing and tracking mental health exercises.

## Features

- Exercise tracking and history
- Mood monitoring
- Guided breathing exercises
- Progress tracking
- User authentication
- Dark mode support

## Tech Stack

- React Native
- Expo
- TypeScript
- Supabase
- React Navigation
- Restyle (Theme)
- React Native Reanimated
- Expo AV

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- Supabase account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ease-app.git
cd ease-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
EAS_PROJECT_ID=your_eas_project_id
```

4. Start the development server:
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