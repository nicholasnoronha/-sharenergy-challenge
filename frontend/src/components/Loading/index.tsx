import loadingGif from "../../assets/loading-gif.gif";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={loadingGif} style={{ width: "4rem" }} />
    </div>
  );
};

export default Loading;
