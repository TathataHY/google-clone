import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SearchLoading() {
  return (
    <div className="container flex flex-col px-4 py-6 mx-auto">
      <Skeleton width={150} />
      <div className="mt-5 flex flex-col gap-5">
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
        <div>
          <Skeleton width={200} />
          <Skeleton count={3} />
        </div>
      </div>
    </div>
  );
}
