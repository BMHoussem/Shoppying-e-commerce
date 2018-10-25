import { Component } from '@angular/core';
import { Chart } from "src/app/model/chart.model";
import { Product } from "src/app/model/product.model";

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent {
    title = 'shoppyng-e-commerce';
    chart: Chart = new Chart();
    const products: Product[] = [
        { productName: 'Product1', price: 56 },
        { productName: 'Product2', price: 20 },
        { productName: 'Product3', price: 67 },
        { productName: 'Product4', price: 100 },
        { productName: 'Product5', price: 19 },
    ];



    addProductToChart( index: any, product: Product ) {
        this.chart.products.push( product );
        this.products.splice( index, 1 );
        this.chart.total += product.price;

    }

    removeProductFromChart( index: any, product: Product ) {
        this.chart.products.splice( index, 1 );
        this.products.push( product );
        this.chart.total -= product.price;

}