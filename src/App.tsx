import { ThemeContext } from 'context';
import { Layout } from 'layout';
import {useState} from 'react';
import Routes from 'routes';

const App = () => {
    const [theme, setTheme] = useState('dark');
    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <div className={`theme-${theme}`}>
                    <Layout>
                        <Routes />
                    </Layout>
                </div>
            </ThemeContext.Provider>
        </>
    )
};
export default App;