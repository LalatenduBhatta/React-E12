import { useParams } from "react-router-dom"
function SingleProduct() {
    let { mobile } = useParams()
    let myProducts = [
        { name: "iphone", brand: "apple", price: "70k" },
        { name: "s24", brand: "samsung", price: "50k" },
        { name: "pixel", brand: "google", price: "40k" },
        { name: "nord", brand: "oneplus", price: "30k" },
    ]
    let mobileDetails = myProducts.find(product => product.name === mobile)
    return (
        <>
            <h1>Single Product Details Page</h1>
            <h1>name ={mobileDetails.name}</h1>
            <h1>brand ={mobileDetails.brand}</h1>
            <h1>price ={mobileDetails.price}</h1>
        </>
    )
}
export default SingleProduct