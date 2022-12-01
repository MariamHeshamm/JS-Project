class cart
{
    productIdFK;
    quantity;
    cartId;
    constructor(productIdFK, quantity, cartId) 
    {
        this.productIdFK = productIdFK;
        this.quantity = quantity;
        this.cartId = cartId;
    }
    get productIdFK() 
    {
        return this.productIdFK;
    }
    get quantity() 
    {
        return this.quantity;
    }
    get cartId() 
    {
        return this.cartId;
    }

    set productIdFK(id) {
        this.productIdFK = id;
    }
    set quantity(quantity) {
        this.quantity = quantity;
    }
    set cartId(id) {
        this.cartId = id;
    }

}