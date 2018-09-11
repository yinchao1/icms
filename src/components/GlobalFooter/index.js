import React from 'react'
import styles from './index.less'

const GlobalFooter = ({links, copyright})=>{
    return (
        <div className={styles.footer}>
            {links && (
                <div className={styles.links}>
                    {
                        links.map(link=>{
                            <a key={link.key} target={link.blankTarget? '_blank' : '_self'} href={link.href}>{link.title}</a>
                        })
                    }
                </div>
            )}
            {copyright && (<div className={styles.copyright}>{copyright}</div>)}
        </div>
    );
};

export default GlobalFooter;