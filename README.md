# Chicken Farm Website

A modern Angular website showcasing chickens and chicks with a WhatsApp contact button.

## Features

- Responsive design using Bootstrap 5
- Image gallery of chickens and chicks
- WhatsApp contact button for easy communication
- Modern UI with smooth animations

## Setup Instructions

1. Install Node.js and npm if you haven't already
2. Install Angular CLI globally:
   ```bash
   npm install -g @angular/cli
   ```
3. Install project dependencies:
   ```bash
   npm install
   ```
4. Update the WhatsApp number:
   - Open `src/app/app.component.ts`
   - Replace `YOUR_PHONE_NUMBER` in the WhatsApp link with your actual phone number (include country code)

## Running the Application

1. Start the development server:
   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200`

## Building for Production

To build the application for production:
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory. 