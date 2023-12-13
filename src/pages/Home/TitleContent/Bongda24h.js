import classNames from "classnames/bind";
import styles from './TitleContent.module.scss';

import robot from '~/assets/container_mid/robot.png';
import hand from '~/assets/container_mid/hand.png';
import danmach from '~/assets/container_mid/danmach.png';
import clothes from '~/assets/container_mid/clothes.png';
import camera from '~/assets/container_mid/camera.png';
import ball from '~/assets/container_mid/ball.png';

const cx = classNames.bind(styles);

function Bongda24h() {
    return <div className={cx('content-title')}>
                <p>
                    <img src={robot} alt=""/>
                    <span>FARM GÀ THÌ CÓ LÀM SAO, KHÔNG FARM GÀ SAO ĐỘI VÀO ĐƯỢC ĐẾN CHUNG KẾT</span>
                    <img src={hand} alt=""/>       
                </p>
                <p>
                    <img src={danmach} alt=""/>
                    <span>Erling Haaland (2000) và thành tích ở UEFA Champions League:</span>
                </p>
                <p>
                    <img src={clothes} alt=""/>
                    <span>31 trận</span>
                </p>
                <p>
                    <img src={ball} alt=""/>
                    <span>37 bàn thắng</span>
                </p>
                <p>
                    <img src={robot} alt=""/>
                    <span>Top 20 chân sút ghi nhiều bàn thắng nhất lịch sử giải đấu</span>
                </p>
                <p>Hiện, Erling Haaland đã trở thành cầu thủ thứ 2 cán mốc 40 bàn thắng trong năm 2023, sau Cristiano Ronaldo.</p>
                <p>
                    <img src={camera} alt=""/>
                    <span>Squawka Football</span>
                </p>
                <a href="https://www.facebook.com/hashtag/bongda24h">#bongda24h</a>
            </div>;
}

export default Bongda24h;