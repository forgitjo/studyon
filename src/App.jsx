import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/home';
import SignIn from './components/signin';
import './App.css';
import SignUp from './components/signup';
import ResponsiveAppBar from './components/appBar';
import Course from './components/course/about_course';
import theme from './components/theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='course' element={<Course />}></Route>
                <Route path='signin' element={<SignIn />}></Route>
                <Route path='signup' element={<SignUp />}></Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
