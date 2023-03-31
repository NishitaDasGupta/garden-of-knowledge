// use local storage to manage cart data
const addToDb = id => {
    let blogsCart = getblogsCart();
    // add quantity
    const quantity = blogsCart[id];
    if (!quantity) 
    { blogsCart[id] = 1;}
    else {
        const newQuantity = quantity + 1;
        blogsCart[id] = newQuantity;
    }
    localStorage.setItem('blogs-Cart', JSON.stringify(blogsCart));
}
const addToMarkReadTime = time => {
    localStorage.setItem('mark-read-time', JSON.stringify(time));}
    
const removeFromDb = id => {
    const blogsCart = getblogsCart();
    if (id in blogsCart) {
        delete blogsCart[id];
        localStorage.setItem('blogs-Cart', JSON.stringify(blogsCart));
    }
}

const getblogsCart = () => {
    let blogsCart = {};

    //get the blogs cart from local storage
    const storedCart = localStorage.getItem('blogs-Cart');
    if (storedCart) {
        blogsCart = JSON.parse(storedCart);
    }
    return blogsCart;
}
const getMarkedRead = () => {
    let blogsCart ;

    //get the blogs cart from local storage
    const storedCart = localStorage.getItem('mark-read-time');
    if (storedCart) {
        blogsCart = JSON.parse(storedCart);
    }
    return blogsCart;
}

const deleteblogsCart = () => {
    localStorage.removeItem('blogs-Cart');
}

export {
    addToDb,
    addToMarkReadTime,
    removeFromDb,
    getblogsCart,
    getMarkedRead,
    deleteblogsCart
}
