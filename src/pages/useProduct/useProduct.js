import axios from "axios";
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase_init";

const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [render, setRender] = useState(false);
    const [user] = useAuthState(auth);
    console.log(user)



    useEffect(() => {
        axios.get('http://localhost:5000/products', {
            headers: { Authorization: `Bearer ${user?.accessToken}` }

        })
            .then(data => {

                setProducts(data.data);
                setRender(false)

            })

    }, [render, user?.accessToken])

    return { products, setRender, render }

}
export default useProduct;