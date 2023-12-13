import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";
import SidebarRight from "./SidebarRight";
import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({children}) {
    const handleScroll = (e) =>{
        console.log(window.Sc)
    }
    return <div>
        <Header/>
        <div className={cx('container')} onScrollCapture={handleScroll}>
            <Sidebar/>
            <div className={cx('content')}>
                {children}
            </div>
            <SidebarRight/>
        </div>
    </div>;
}

export default DefaultLayout;