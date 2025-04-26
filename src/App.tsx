import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const queryClient = new QueryClient()
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <Router />
      </QueryClientProvider>
    </MantineProvider>
  );
}
