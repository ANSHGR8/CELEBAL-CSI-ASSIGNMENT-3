import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Dashboard from './pages/Dashboard';
import TablePage from './pages/TablePage';
import ChartsPage from './pages/ChartsPage';
import CalendarPage from './pages/CalendarPage';
import KanbanPage from './pages/KanbanPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/tables" component={TablePage} />
          <Route path="/charts" component={ChartsPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="/kanban" component={KanbanPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
