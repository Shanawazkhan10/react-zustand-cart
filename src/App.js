import logo from './logo.svg';
import './App.css';
import { useCartStore } from './cartStore';
// import useCartStore from "./cartStore";
const sampleData = [
  {
    "name": "Adeel Solangi",
    "language": "Sindhi",
    "id": "V59OF92YF627HFY0",
    "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
    "version": 6.1
  },
  {
    "name": "Afzal Ghaffar",
    "language": "Sindhi",
    "id": "ENTOCR13RSCLZ6KU",
    "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
    "version": 1.88
  },
  {
    "name": "Aamir Solangi",
    "language": "Sindhi",
    "id": "IAKPO3R4761JDRVG",
    "bio": "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
    "version": 7.27
  },
  {
    "name": "Abla Dilmurat",
    "language": "Uyghur",
    "id": "5ZVOEPMJUI4MB4EN",
    "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
    "version": 2.53
  },
  {
    "name": "Adil Eli",
    "language": "Uyghur",
    "id": "6VTI8X6LL0MMPJCC",
    "bio": "Vivamus id faucibus velit, id posuere leo. Morbi vitae nisi lacinia, laoreet lorem nec, egestas orci. Suspendisse potenti.",
    "version": 6.49
  },
  {
    "name": "Adile Qadir",
    "language": "Uyghur",
    "id": "F2KEU5L7EHYSYFTT",
    "bio": "Duis commodo orci ut dolor iaculis facilisis. Morbi ultricies consequat ligula posuere eleifend. Aenean finibus in tortor vel aliquet. Fusce eu ultrices elit, vel posuere neque.",
    "version": 1.9
  },]
function App() {
  const { cart,
    count } =
    useCartStore((state) => ({
      cart: state.cart,
      count: state.count,
      // noOfIssued: state.noOfIssued,
      // issueBook: state.issueBook,
      // returnBook: state.returnBook,
    }));
  const addToCart = useCartStore((state) => state.addToCart);
  const removeCart = useCartStore((state) => state.removeCart);
  const addItem = useCartStore((state) => state.addItem);
  console.log(cart, "DKODOKDOKDKODKDOKDO");

  return (
    <div className="App">
      <h1>React Zustand</h1>
      <h2>Add To Cart</h2>
      <h2>Cart Count {count}</h2>
      {
        sampleData?.map((i) => (
          <>
            <p>{i.name}&nbsp;: {i.language}</p><button
              onClick={() => addToCart(i)}>Add to Cart</button>
          </>
        ))
      }

      <h5>Cart Item</h5>{
        count === 0 ? <><h1>Your Cart is EMPTY</h1></> : cart?.map((i) => (
          <>
            <p>{i.name}&nbsp;: {i.language} {i.count}</p>
            <button onClick={() => removeCart(i.id)}>Remove item</button>
            <button onClick={() => addItem(i.id)}>Add item</button>
          </>
        ))

      }
    </div>
  );
}

export default App;
