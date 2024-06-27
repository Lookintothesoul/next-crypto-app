export default function HomeLoading() {
  return (
    <div className="flex w-full items-center justify-center">
      <span className="loader" />
      <h1 style={{ display: "none" }}>Loading...</h1>
    </div>
  );
}
