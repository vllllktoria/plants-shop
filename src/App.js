import { BrowserRouter, Routes, Route } from "react-router-dom";

import {MainPage} from "./pages/MainPage/MainPage";
import {Navbar} from "./shared/components/Navbar/Navbar";
import {Products} from "./pages/Products/Products";
import {Contacts} from "./pages/Contacts/Contacts";
import {Cart} from "./pages/Cart/Cart";
import {Profile} from "./pages/Profile/Profile";
import {NotFound} from "./pages/NotFound/NotFound";

import {Wrapper} from "./pages/MainPage/MainPage.styles";
import {Footer} from "./shared/components/Footer/Footer";

function App() {
  return (
      <Wrapper>
          <BrowserRouter>
              <Navbar />
              <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/" element={<MainPage />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/profile" element={<Profile />} />
              </Routes>
              <Footer />
          </BrowserRouter>
      </Wrapper>
  );
}

export default App;
