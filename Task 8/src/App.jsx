import { useMemo, useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import { FormContext } from './context/FormContext.jsx';

const defaultFormData = {
  fullName: 'Balaji Sivakumar',
  role: 'Software Engineer',
  phone: '+91 9345355312',
  email: 'balaji022212@gmail.com',
  location: 'Coimbatore, Tamil Nadu',
  linkedin: 'linkedin.com/in/balaji0212',
  github: 'github.com/balaji-0212',
  education: 'B.E - Electronics and Communication Engineering',
  college: 'Sri Ramakrishna Engineering College',
  skills:
    'Python, Data Analytics, OOP, HTML, CSS, SQL, MySQL, AWS, Git, GitHub Actions, Power BI, Excel, Linux, Data Structures & Algorithms',
  internship: 'Data Science Intern at VCodez',
  careerInterests: 'AI, IoT, Backend Development, Hardware-Software Integration',
};

function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(
    () => ({
      formData,
      setFormData,
      theme,
      toggleTheme,
    }),
    [formData, theme],
  );

  return (
    <FormContext.Provider value={contextValue}>
      <main className={`app app--${theme}`}>
        <div className="app__shell">
          <Header />
          <Form />
        </div>
      </main>
    </FormContext.Provider>
  );
}

export default App;
