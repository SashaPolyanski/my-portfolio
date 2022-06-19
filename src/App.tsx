import {Contacts, Footer, Header, Main, Projects, Skills} from './components';
import s from './App.module.scss';

export const App = () => {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
}