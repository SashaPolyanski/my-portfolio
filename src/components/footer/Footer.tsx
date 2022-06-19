import s from './Footer.module.scss';
import {Fade} from 'react-awesome-reveal';
import {Title} from '../../common/components/title/Title';
import linkedin from '../../assets/images/links/linkedin.png'
import github from '../../assets/images/links/github.png'
import codewars from '../../assets/images/links/codewars.png'
import telegram from '../../assets/images/links/telegram.png'

export const Footer = () => (
    <div className={s.mainBlock}>
        <Fade delay={150}>
            <div className={s.footerContainer}>
                <Title text={'Sasha Polyanski'}/>
                <div className={s.icons}>
                    <a href="https://www.linkedin.com/in/%D1%81%D0%B0%D1%88%D0%B0-%D0%BF%D0%BE%D0%BB%D1%8F%D0%BD%D1%81%D0%BA%D0%B8%D0%B9-24525a209/"
                       className={s.icon} target='_blank'>
                        <img src={linkedin} className={s.img} alt={'linkedin'}/>
                    </a>
                    <a href="https://github.com/SashaPolyanski"
                       className={s.icon} target='_blank' >
                        <img src={github} className={s.img} alt={'github'}/>
                    </a>
                    <a href="https://www.codewars.com/users/Heftyq"
                       className={s.icon} target='_blank'>
                        <img src={codewars} className={s.img} alt={'codewars'}/>
                    </a>
                    <a href="https://t.me/heftyq"
                       className={s.icon} target='_blank'>
                        <img src={telegram} className={s.img} alt={'telegram'}/>
                    </a>
                </div>
                <span className={s.copyright}>© 2022, All Rights Reserved.</span>
            </div>
        </Fade>
    </div>
)