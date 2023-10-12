import './header.scss'
import logo from '../../img/logo.svg'
import useStart from '../../hooks/useStart'
import profile from '../../img/Mask group.svg'
import like from '../../img/heart.svg'
import arrow from '../../img/Vector 256.svg'
import Karzinka from '../../img/fi_shopping-bag.svg'
import Category from '../category/category'

function Header() {
    const { setHero, hero } = useStart()
    return (
       <div className="head-fath">
            <div className={hero ? "head head-active" : "head"}>
                <header className="header">
                    <div className="left">
                        <a href="/">
                            <img src={logo} alt="Company logo" />
                        </a>
                        <ul>
                            <li className={hero === 'man' ? "active" : ""} onClick={() => setHero('man')}>
                                man
                            </li>
                            <li className={hero === 'woman' ? "active" : ""} onClick={() => setHero('woman')}>
                                woman
                                <span></span>
                            </li>
                            <li className={hero === 'children' ? "active" : ""} onClick={() => setHero('children')}>
                                children
                                <span></span>
                            </li>
                            <li className={hero === 'sale' ? "active" : ""} onClick={() => setHero('sale')}>
                                sale
                                <span></span>
                            </li>
                            <li className={hero === 'collection' ? "active" : ""} onClick={() => setHero('collection')}>
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
                        <hr className='hr' />
                        <div className='list'>
                            <div className={hero === 'profile' ? "active" : ""} onClick={() => setHero('profile')}>
                                <img src={profile} alt="profile" />
                            </div>
                            <hr />
                            <div className={hero === 'like' ? "active" : ""} onClick={() => setHero('like')}>
                                <img src={like} alt="profile" />
                                <span></span>
                            </div>
                            <hr />
                            <div className={hero === 'Karzinka' ? "active" : ""} onClick={() => setHero('Karzinka')}>
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