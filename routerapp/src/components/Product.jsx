import { useNavigate } from "react-router-dom"
function Product() {
    let myProducts = [
        { name: "iphone", brand: "apple", price: "70k" },
        { name: "s24", brand: "samsung", price: "50k" },
        { name: "pixel", brand: "google", price: "40k" },
        { name: "nord", brand: "oneplus", price: "30k" },
    ]
    let navigate = useNavigate()
    function goToMobilePage(name) {
        navigate(`/product/${name}`)
    }
    return (
        <>
            <table border={1} style={{ borderCollapse: "collapse", fontSize: "30px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {myProducts.map(product => {
                        return <tr key={product.name} onClick={() => goToMobilePage(product.name)}
                            style={{ cursor: "pointer" }}>
                            <td>{product.name}</td>
                            <td>{product.brand}</td>
                            <td>{product.price}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Product