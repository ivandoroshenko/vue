var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        brand: 'Vue Craftery',
        selectedVariant: 0,
        altText: "A pair of socks",
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
                variantQuantity: 0
            }
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
        onSale: true
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand +  ' ' + this.product + ' '+ 'are on sale!'
            }
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
                this.selectedVariant = index
                
        },
        dercCart() {
            this.cart -= 1
        }
    }
})