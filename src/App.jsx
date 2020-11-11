import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


//Pages
import PostsLists from './Pages/PostsList/index'
import PostForm from './Pages/PostForm/PostForm'
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page1">Link 1</Link>
              </li>
              <li>
                <Link to="/page2">Link 2</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/create-post">Create a post</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/page1">
              <h1>Pagina 1</h1>
            </Route>
            <Route path="/page2" >
              <h1>Pagina 2</h1>
            </Route>
            <Route path="/posts" >
              <PostsLists />
            </Route>
            <Route path="/create-post" >
              <PostForm />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
