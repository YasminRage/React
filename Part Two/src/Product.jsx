function Product(props) {
    return (
        <li>
            {props.name} - £{props.price}
        </li>
    )
}
export default Product