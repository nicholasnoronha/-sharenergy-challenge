import loadingGif from "../../assets/loading-gif.gif";

const Loading = () => {
  return (
    <div
      style={{
        maxWidth: 400,
        maxHeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20%",
      }}
    >
      <img src={loadingGif} style={{ width: "4rem" }} />
    </div>
  );
};

export default Loading;
