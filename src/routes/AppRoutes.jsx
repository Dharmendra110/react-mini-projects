import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Products = lazy(() => import("../features/products/Products"));
const Cart = lazy(() => import("../features/products/Cart"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));

const Users = lazy(() => import("../features/user/Users"));
const Counter = lazy(() => import("../projects/counter-app/Counter"));
const MainContent = lazy(() => import("../components/Layout/MainContent"));
const TodoApp = lazy(() => import("../projects/todoApp/TodoApp"));
const Debouce = lazy(() => import("../projects/debounced-serach/Debouce"));
const InfiniteScroll = lazy(
  () => import("../projects/infinite-scroll/InfiniteScroll"),
);
const Pagination = lazy(() => import("../projects/pagination/Pagination"));
const Review = lazy(() => import("../projects/reviews/Review"));
const ColorMixer = lazy(() => import("../projects/rgb-color-mixer/ColorMixer"));
const StepProgressBar = lazy(
  () => import("../projects/step-progress-bar/StepProgressBar"),
);
const Stopwatch = lazy(() => import("../projects/stopwatch/Stopwatch"));
const Mode = lazy(() => import("../projects/theme-switcher/Mode"));
const StarRating = lazy(() => import("../projects/star-rating/StarRating"));
const TabsComponent = lazy(
  () => import("../projects/tabs-component/TabsComponent"),
);

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <h1 className="text-5xl flex justify-center  text-red-500 font-bold">
          Loading...
        </h1>
      }
    >
      <Routes>
        <Route element={<MainContent />}>
          <Route
            index
            element={<h1 className="text-3xl text-yellow-500">Home Page</h1>}
          />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="projects/counter" element={<Counter />} />
          <Route path="projects/todo" element={<TodoApp />} />
          <Route path="projects/debounce" element={<Debouce />} />
          <Route path="projects/infinite" element={<InfiniteScroll />} />
          <Route path="projects/pagination" element={<Pagination />} />
          <Route path="projects/reviews" element={<Review />} />
          <Route path="projects/rgb" element={<ColorMixer />} />
          <Route path="projects/progress-bar" element={<StepProgressBar />} />
          <Route path="projects/stop-watch" element={<Stopwatch />} />
          <Route path="projects/theme" element={<Mode />} />
          <Route path="projects/rating" element={<StarRating />} />
          <Route path="projects/tabs" element={<TabsComponent />} />
          <Route path="projects/todo" element={<TodoApp />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
