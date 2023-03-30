// use local storage to manage cart data
const addToDb = id => {
    let playersCart = getplayersCart();
    // add quantity
    const quantity = playersCart[id];
    playersCart[id] = 1;
    localStorage.setItem('players-cart', JSON.stringify(playersCart));
}

const removeFromDb = id => {
    const playersCart = getplayersCart();
    if (id in playersCart) {
        delete playersCart[id];
        localStorage.setItem('players-cart', JSON.stringify(playersCart));
    }
}

const getplayersCart = () => {
    let playersCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('players-cart');
    if (storedCart) {
        playersCart = JSON.parse(storedCart);
    }
    return playersCart;
}

const deleteplayersCart = () => {
    localStorage.removeItem('players-cart');
}

export {
    addToDb,
    removeFromDb,
    getplayersCart,
    deleteplayersCart
}
