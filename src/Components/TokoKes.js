import React from "react"
import Products from './Products'
import '../styles/tokoKes.css'

function TokoKes() {
    return (
        <div className="tokoKes">
            <div className="toprow">
                <h2 className="title">Toko Kesehatan</h2>
                <h2 className="balance">Rp 865.000</h2>
            </div>
            <input type="text" placeholder="cari obat / vitamin" />
            <h2 className="optionsTitle">Pilihan Produk Kesehatan</h2>
            <div className="healthProducts">
                <Products />
            </div>
        </div>
    )
}

export default TokoKes