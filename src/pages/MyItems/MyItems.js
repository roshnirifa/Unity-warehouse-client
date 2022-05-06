import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/myItems')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1>my items {items.length}</h1>
        </div>
    );
};

export default MyItems;