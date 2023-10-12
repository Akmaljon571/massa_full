import { useState } from 'react';
import db from '../../db/filter.json'
import './category.scss'
import { useNavigate } from 'react-router-dom';

function Category() {
    const [filter, setFilter] = useState(JSON.parse(localStorage.getItem('filter')) || [1]);
    const navigate = useNavigate()

    const click = (id) => {
        if (filter.includes(id)) {
            const newFilter = filter.filter(e => e !== id)
            setFilter(newFilter)
            localStorage.setItem('filter', JSON.stringify(newFilter))
            navigate(`/category/${id}`)
        } else {
            const newFilter = [...filter, id]
            setFilter(newFilter)
            localStorage.setItem('filter', JSON.stringify(newFilter))
            navigate(`/category/${id}`)
        }
    }

    return (
        <ul className='category'>
            {db?.length ? db.map(e => 
                <li onClick={() => click(e.id)} className={filter.includes(e.id) ? "active-cat" : ""} key={e.id}>
                    {e.title}
                </li>
            ) : null}
        </ul>
    );
}

export default Category;