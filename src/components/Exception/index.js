import React,{createElement} from 'react';
import config from './typeconfig';
import styles from './index.less';
import { Button } from 'antd';

const Exception=({type, title, desc, img, actions, linkElement="a"})=>{
    const pageType = type in config ? type : '404';
    const exceptionImg = img || config[pageType].img;
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.imgBlock}>
                    <div style={{ background: `url(${exceptionImg}) center no-repeat`}}></div>
                </div>

                <div className={styles.descBlock}>
                    <h1>{title || config[pageType].title}</h1>
                    <span className={styles.desc}>{desc || config[pageType].desc}</span>
                    {
                        actions || 
                        createElement(linkElement, {
                            to: '/home',
                            href: '/home'
                        }, <Button type="primary">返回首页</Button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Exception;
