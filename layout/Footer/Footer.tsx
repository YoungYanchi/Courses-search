import { FooterProps } from "./Footer.props";
import cn from 'classnames';
import styles from './Footer.module.css';
import {format} from 'date-fns'


export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
      <footer className={cn(className, styles.footer)} {...props}>
        <p>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
        <p><a href="#" target="_blank">Пользовательское соглашение</a></p>
        <p><a href="#" target="_blank">Политика конфиденциальности</a></p>

      </footer>
    );
    }
