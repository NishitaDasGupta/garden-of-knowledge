// use local storage to manage cart data
const addToDb = id => {
    let blogsCart = getblogsCart();
    // add quantity
    const quantity = blogsCart[id];
    blogsCart[id] = 1;
    localStorage.setItem('blogs-Cart', JSON.stringify(blogsCart));
}

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

const deleteblogsCart = () => {
    localStorage.removeItem('blogs-Cart');
}

export {
    addToDb,
    removeFromDb,
    getblogsCart,
    deleteblogsCart
}
