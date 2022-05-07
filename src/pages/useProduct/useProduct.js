import axios from "axios";
import { useEffect, useState } from "react"

const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [render, setRender] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(data => {
                setRender(true)
                setProducts(data.data)

            })
            .catch(error => {
                setRender(false)
            })
    }, [render])

    return { products, setRender }

}
export default useProduct;