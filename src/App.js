import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/bootstrap/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

import HelloWorld from "./components/hello-world";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/Tuiter/home-screen";
import ExploreScreen from "./components/Tuiter/explore-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Labs />} />
          	<Route path="labs" exact={true} element={<Labs />} />
            <Route path="hello" element={<HelloWorld />} />
            <Route path="tuiter" element={<Tuiter />}>
              <Route index element={<HomeScreen />} />
              <Route path="explore" element={<ExploreScreen />} />
              {/* <Route path="notifications" element={<NotificationScreen />} />
              <Route path="messages" element={<MessageScreen />} />
              <Route path="bookmarks" element={<BookmarkScreen />} />
              <Route path="lists" element={<ListScreen />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="more" element={<MoreScreen />} /> */}
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
