import React from 'react';
import { Link } from 'gatsby';
import style from './tags.module.less';

/**
 *
 * @param img
 * @param name
 * @param description
 * @param color
 * @param url
 * @returns {JSX.Element}
 * @constructor
 */
const TagCard = ({ img, name, description, color, url }) => {
  return (
    <Link className={style.tagCard} to={url}>
      <div className={style.tagCard}>
        <div
          className={style.tagImg}
          style={{
            backgroundImage: `url(${img})`
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}` }}>
              {name}
            </h4>
          </div>

          {description.map(para => (
            <p>{para}</p>
          ))}

        </div>
      </div>
    </Link>
  );
};

export default TagCard;
