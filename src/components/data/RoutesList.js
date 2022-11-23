import ReverseArray from "../../Pages/Arrays/ReverseArray";
import MoveNegativeToLeft from "../../Pages/Arrays/MoveNegativeToLeft";
import MinMaxElement from "../../Pages/Arrays/MinMaxElement";
import SortArrayZerosOnesTwos from "../../Pages/Arrays/SortArrayZerosOnesTwos";

const RoutesList = [
  {
    path: "/",
  },
  {
    path: "/reverse-array",
    element: <ReverseArray />,
  },
  {
    path: "/max-min-element-of-array",
    element: <MinMaxElement />,
  },
  {
    path: "/move-negative-numbers-to-left",
    element: <MoveNegativeToLeft />,
  },
  {
    path: "/sort-array-0s-1s-2s",
    element: <SortArrayZerosOnesTwos />
  }
];

export default RoutesList;
