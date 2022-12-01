class Product
{
    productId;
    productName;
    productPrice;
    ProductImg;
    ProductDiscount;
    quantityRemaining;
    soldQuantity;

      constructor(productId, productName, productPrice, ProductImg, ProductDiscount, quantityRemaining, soldQuantity ) 
      {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.ProductImg = ProductImg;
        this.ProductDiscount = ProductDiscount;
        this.quantityRemaining = quantityRemaining;
        this.soldQuantity = soldQuantity;
      }
    get productName() 
    {
        return this.productName;
    }
    get productId()
    {
        return this.productId;
    }
    get productPrice()
    {
        return this.productPrice;
    }
    get ProductImg()
    {
        return this.ProductImg;
    }

    set productId(id) {
        this.productId = id;
    }
    set productPrice(price) {
        this.productPrice = price;
    }
    set ProductImg(img) {
        this.ProductImg = img;
    }
    set productName(name) {
        this.productName = name;
    }
   

}