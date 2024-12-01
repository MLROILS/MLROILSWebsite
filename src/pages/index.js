
// Athreya Routes
import NewHome from "./NewHome";
import ItemDetails03 from "./newItemDetails";



const routes = [
  { path: '/', component: <NewHome />},
  // { path: '/home-v2', component: <Home02 />},
  // { path: '/home-v3', component: <Home03 />},
  // { path: '/home-v4', component: <Home04 />},
  // { path: '/home-v5', component: <Home05 />},
  // { path: '/home-v6', component: <Home06 />},
  // { path: '/explore-v1', component: <Explore01 />},
  // { path: '/explore-v2', component: <Explore02 />},
  // { path: '/explore-v3', component: <Explore03 />},
  // { path: '/explore-v4', component: <Explore04 />},
  // { path: '/collection', component: <Collection />},
  // { path: '/live-auctions-v1', component: <LiveAutions01 />},
  // { path: '/live-auctions-v2', component: <LiveAutions02 />},
  // { path: '/item-details-v1', component: <ItemDetails01 />},
  // { path: '/item-details-v2', component: <ItemDetails02 />},
  // { path: '/dashboard', component: <Dashboard />},
  // { path: '/ranking', component: <Ranking />},
  // { path: '/help-center', component: <HelpCenter />},
  // { path: '/faqs', component: <Faqs />},
  // { path: '/wallet', component: <Wallet />},
  // { path: '/login', component: <Login />},
  // { path: '/signup', component: <SignUp />},
  // { path: '/create', component: <Create />},
  // { path: '/blog-v1', component: <Blog01 />},
  // { path: '/blog-v2', component: <Blog02 />},
  // { path: '/blog-details-v1', component: <BlogDetails01 />},
  // { path: '/blog-details-v2', component: <BlogDetails02 />},
  // { path: '/contact', component: <Contact />},
  // { path: '/newhome', component: <NewHome />},
  { path: '/itemDeatils/:id', component: <ItemDetails03 />},

]

export default routes;