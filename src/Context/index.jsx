import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  //Shopping cart . Count
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  //Product Detail . Show product detail
  const [productToShow, setProductToShow] = useState({});

  // Shopping cart . Add product to cart
  const [cartProducts, setCartProducts] = useState([]);

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  //Shopping cart . Order
  const [order, setOrder] = useState([]);
  //Get products
  const [items, setItems] = useState([]);
  //
  const [filteredItems, setFilteredItems] = useState([]);
  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data.products));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };
  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };


  useEffect(() => {
    if (!searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
    if (searchByCategory === null) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );


    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );

    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        setIsProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
