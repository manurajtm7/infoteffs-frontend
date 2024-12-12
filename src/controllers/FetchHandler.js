const productionUrl = import.meta.env.VITE_REACT_APP_LOCAL_HOST;

const hanldeFetchData = async () => {
  return (await fetch(`${productionUrl}/`)).json();
};

export { hanldeFetchData, productionUrl };
