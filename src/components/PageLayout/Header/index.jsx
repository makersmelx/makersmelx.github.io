import React, {useState} from 'react';
import {Link} from 'gatsby';
import {Layout} from 'antd';
import 'font-awesome/less/font-awesome.less';
import style from './header.module.less';
import '../../../styles/global.less';
import {useWindowSize} from '../../../utils/hooks';
import Config from '../../../../config';

export default () => {
  const [menu, setMenu] = useState(false);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      if (menu) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
  };
  return (
      <>
        <div className={style.circleMenu} role="button" tabIndex="0"
             onKeyDown={toggleMenu} onClick={toggleMenu}>
          <div className={`${style.hamburger} ${menu ? style.menuIcon : null}`}>
            <div className={style.line} />
            <div className={style.line} />
            <div className={style.hamburgerText}>MENU</div>
          </div>
        </div>
        <Layout
            className={`${style.navWrap} ${menu ? null : style.hidden} ${menu ?
                style.openMenu :
                null}`}>
          <div className={style.backgroundDiv}>
            <ul className={style.nav}>
              {
                (Object.entries(Config.pages)).map((page) => {
                  return (
                      <li className={style.navItem} key={page[0]}>
                        <Link to={page[1]} onClick={toggleMenu}
                              activeClassName={style.anchorActive}>
                          {page[0]}
                        </Link>
                      </li>
                  );
                })
              }
            </ul>
          </div>
        </Layout>
      </>
  );
};
