import React from "react"
import '../styles/Products.css'

class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            category: []
        }
        this.url = "https://api.gotc.app/dev/pasien/get_ctg/?tp=home"
    }

    componentDidMount() {
        fetch(this.url)
        .then((response) => {
            if (response.ok) { 
                return response.json(); 
            } 
            else { 
                throw new Error('Something went wrong')
            } 
        })
        .then(data => {
            this.setState({
                category: data.category
            })
        }) 
        .catch((error) => { 
            console.log("Error")
        })
    }

    render() {
        var urlheader = "https://adm.gotc.app/uploads/product_categories/"
        var product = this.state.category.map(item =>
            <div className="productContainer" key={item.id}>
                <img className="image" src={urlheader + item.image} alt={item.nama}/>
                <p className="productName">{item.nama}</p>
            </div>
            )
        return (
            <div className="productsGrid">
                {product}    
            </div>
        )
    }
}

export default Products