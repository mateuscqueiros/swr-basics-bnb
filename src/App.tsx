import './App.css';
import { useProducts } from './features/products';

function App() {
  const { products, isLoading } = useProducts();
  return (
    <>
      {/*<button onClick={addUser}>Adicionar usuário</button>*/}
      {isLoading && <>Carregando...</>}
      {products &&
        products.map((product: any) => <p key={product.id}>{product.title}</p>)}
    </>
  );
}

export default App;
