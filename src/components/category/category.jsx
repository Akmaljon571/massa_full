import { useEffect, useState } from 'react';
import db from '../../db/filter.json'
import { useLocation, useNavigate } from 'react-router-dom';
import useStart from '../../hooks/useStart';
import './category.scss'

function Category() {
    const [filter, setFilter] = useState(Number(useLocation().pathname.split('/category/')[1]) || 0);
    const navigate = useNavigate()
    const { setHero, hero } = useStart()
    const [data, setData] = useState([]);

    const click = (id) => {
        setFilter(id)
        navigate(`/category/${id}`)
        setHero('')
    }

    useEffect(() => {
        console.log(db.filter(e => e.category === hero))
        setData(db.filter(e => e.category === hero))
    }, [hero]);

    return (
        <ul className='category'>
            {db?.length ? data.map(e => 
                <li onClick={() => click(e.id)} className={filter === e.id ? "active-cat" : ""} key={e.id}>
                    {e.title}
                </li>
            ) : null}
        </ul>
    );
}

export default Category;