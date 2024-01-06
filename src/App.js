import { BrowserRouter, Routes, Route } from "react-router-dom";

import {MainPage} from "./pages/MainPage/MainPage";
import {Navbar} from "./shared/components/Navbar/Navbar";
import {Products} from "./pages/Products/Products";
import {Contacts} from "./pages/Contacts/Contacts";
import {Cart} from "./pages/Cart/Cart";
import {Profile} from "./pages/Profile/Profile";
import {NotFound} from "./pages/NotFound/NotFound";

import {MainWrapper} from "./pages/MainPage/MainPage.styles";

function App() {
  return (
      <MainWrapper>
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
          </BrowserRouter>
      </MainWrapper>
  );
}

export default App;
