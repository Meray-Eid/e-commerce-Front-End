import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { definePreset } from '@primeng/themes';

const BlueAuraPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe',
            300: '#a5b4fc', 400: '#818cf8', 500: '#4F46E5',
            600: '#4338ca', 700: '#3730a3', 800: '#312e81',
            900: '#0F172A',
            950: '#020617'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '#F8FAFC',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '#020617',
                    100: '#0f172a',
                    200: '#1e293b',
                    300: '#334155',
                    400: '#475569',
                    500: '#64748B',
                    600: '#94a3b8',
                    700: '#cbd5e1',
                    800: '#e2e8f0',
                    900: '#f1f5f9',
                    950: '#f8fafc'
                }
            }
        }
    }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    providePrimeNG({
        theme: {
            preset: BlueAuraPreset,
            options: {
                darkModeSelector: '.app-dark'
            }
        }
    })
  ]
};
