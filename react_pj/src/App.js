import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import RecordPage from './pages/record';
import testpage from './pages/testpage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuditList from './components/AuditList';
import ReportVulnerabilitiesTable from './components/Vulnerabilities';
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        {/* <Route path='/signin' component={SigninPage} exact /> */}
        {/* <Route path='/record' component={RecordPage} exact /> */}
        {/* <Route path='/testpage' component={testpage} exact /> */}
        <Route path='/auditlist' component={AuditList} exact />
        <Route
          path="/report/:reportId"
          render={({ match }) => (
            <ReportVulnerabilitiesTable reportId={match.params.reportId} />
          )}
        />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
