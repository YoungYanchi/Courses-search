import {HtagProps} from "./Htag.props";
import c from './Htag.module.css'


export const Htag = ({ tag, children}: HtagProps): JSX.Element => {
    switch (tag){
        case 'h1':
            return <h1 className={c.h1}>{children}</h1>;
        case 'h2':
            return <h2 className={c.h2}>{children}</h2>;
        case 'h3':
            return <h3 className={c.h3}>{children}</h3>;
        default:
            return <></>;

    }
};