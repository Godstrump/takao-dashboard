import { useMemo, Suspense, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import theming from './theme/';
import AppRouter from './AppRouter';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectItems } from './redux/items/items.selectors';
import { DATA } from './utils/constants';
import { addItems } from './redux/items/items.reducer';

export default function App() {
  const theme = createTheme(theming);
  const data = useAppSelector(selectItems)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (!data) {
      dispatch(addItems(DATA))
    }
  }, [data])

  return (
    <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <Router>
            <Suspense fallback={<>Loading...</>}>
                <AppRouter />
            </Suspense>
          </Router>
        </ThemeProvider>
    </SnackbarProvider>
  )
}
