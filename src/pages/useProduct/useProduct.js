import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return [products, setProducts]

}
export default useProduct;