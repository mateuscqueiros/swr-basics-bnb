import './App.css';
import { useCreateProduct, useProducts } from './features/products';

function App() {
  const { products, isLoading, error } = useProducts();
  const { createProduct } = useCreateProduct();

  if (error) return <>Houve um erro</>;
  return (
    <>
      <button onClick={() => createProduct({ title: 'Mateus' })}>
        Criar produto
      </button>
      {/*<button onClick={addUser}>Adicionar usuário</button>*/}
      {isLoading && <>Carregando...</>}
      {products &&
        products.map((product: any) => <p key={product.id}>{product.title}</p>)}
    </>
  );
}

export default App;
