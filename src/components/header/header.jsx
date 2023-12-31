import './header.scss'
import logo from '../../img/logo.svg'
import useStart from '../../hooks/useStart'
import profile from '../../img/Mask group.svg'
import like from '../../img/heart.svg'
import arrow from '../../img/Vector 256.svg'
import Karzinka from '../../img/fi_shopping-bag.svg'
import Category from '../category/category'
import { useEffect, useState } from 'react'

function Header() {
    const { setHero, hero } = useStart()
    const [findHero, setFindHero] = useState(hero);
    const [menu, setMenu] = useState(true);

    useEffect(() => {
        if (hero) {
            setFindHero(hero)
        }
    }, [hero]);

    return (
       <div className="head-fath">
            <div className={hero ? "head head-active" : "head"}>
                <header className="header">
                    <div className="left">
                        <a href="/">
                            <img src={logo} alt="Company logo" />
                        </a>
                        <ul className='t_none header_list'>
                            <li className={findHero === 'man' ? "active" : ""} onClick={() => setHero('man')}>
                                man
                            </li>
                            <li className={findHero === 'woman' ? "active" : ""} onClick={() => setHero('woman')}>
                                woman
                                <span></span>
                            </li>
                            <li className={findHero === 'children' ? "active" : ""} onClick={() => setHero('children')}>
                                children
                                <span></span>
                            </li>
                            <li className={findHero === 'sale' ? "active" : ""} onClick={() => setHero('sale')}>
                                sale
                                <span></span>
                            </li>
                            <li className={findHero === 'collection' ? "active" : ""} onClick={() => setHero('collection')}>
                                collection
                            </li>
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='none menu'>
                            menu
                        </div>
                        <ul className={menu ? "menu-list" : 'none menu-list'}>
                            <li className={findHero === 'man' ? "active" : ""} onClick={() => setHero('man')}>
                                man
                            </li>
                            <li className={findHero === 'woman' ? "active" : ""} onClick={() => setHero('woman')}>
                                woman
                                <span></span>
                            </li>
                            <li className={findHero === 'children' ? "active" : ""} onClick={() => setHero('children')}>
                                children
                                <span></span>
                            </li>
                            <li className={findHero === 'sale' ? "active" : ""} onClick={() => setHero('sale')}>
                                sale
                                <span></span>
                            </li>
                            <li className={findHero === 'collection' ? "active" : ""} onClick={() => setHero('collection')}>
                                collection
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <select>
                            <option value="en">English</option>
                            <option value="en">Uzbek</option>
                            <option value="en">Ruscha</option>
                        </select>
                        <hr className='hr t_none' />
                        <div className='list'>
                            <div className={findHero === 'profile' ? "active" : ""} onClick={() => setHero('profile')}>
                                <img src={profile} alt="profile" />
                            </div>
                            <hr />
                            <div className={findHero === 'like' ? "active" : ""} onClick={() => setHero('like')}>
                                <img src={like} alt="profile" />
                                <span></span>
                            </div>
                            <hr />
                            <div className={findHero === 'Karzinka' ? "active" : ""} onClick={() => setHero('Karzinka')}>
                                <img src={Karzinka} alt="profile" />
                                <span></span>
                            </div>
                        </div>
                    </div>
                </header>
                {hero ?
                    <div className="hero">
                        <div className="top">
                            <h3 className='title'>{hero}</h3>
                            <img onClick={() => setHero('')} src={arrow} alt="Arrow" />
                        </div>
                        <hr className='line' />
                        <div className="bottom">
                            <Category />
                        </div>
                    </div>
                : null}
            </div>
       </div>
    )
}

export default Header