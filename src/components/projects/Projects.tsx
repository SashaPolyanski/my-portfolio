import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../../common/components/title/Title';
import todolist from '../../assets/images/projects/todolist.jpg'
import test from '../../assets/images/projects/TestForNinjaDev.jpg'
import brainstorm from '../../assets/images/projects/brainstorm.jpg'
import {Fade} from 'react-awesome-reveal';

export const Projects = () => (
    <div className={s.projectsBlock} id="projects">
        <Fade delay={150}>
            <div className={s.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project imgUrl={`url(${brainstorm})`} title={'Brainstorm'}
                             projectUrl={'https://YuraKholoimov.github.io/cards-front-2.0'}
                             description={''}/>
                    <Project imgUrl={`url(${todolist})`} title={'Todolist'}
                             projectUrl={'https://sashapolyanski.github.io/TODOLIST/'}
                             description={''}/>
                    <Project imgUrl={`url(${test})`} title={'Test task for NinjaDev'}
                             projectUrl={'https://sashapolyanski.github.io/testForNinjaDev/'}
                             description={''}/>
                </div>
            </div>
        </Fade>
    </div>
)