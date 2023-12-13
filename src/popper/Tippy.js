import classNames from "classnames/bind";
import styles from './popper.module.scss'
const cx = classNames.bind(styles)
function Tippy({children,small,normal,large,left,right,noscroll,newmsg}) {
    const classes = cx('wrapper',{
        small,
        normal,
        large,
        left,
        right,
        noscroll,
        newmsg
    })
    return <div style={{zIndex: 3 }} className={classes}>
        {children}
    </div>;
}
export default Tippy;