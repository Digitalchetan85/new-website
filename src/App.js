import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <TopMenuBar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
        <Footer />

      </Router>
      
    </div>
  );
}

export default App;
