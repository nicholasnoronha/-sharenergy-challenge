import React from "react";
import notFound from "../../assets/notFound.jfif";

interface StatusProps {
  httpCatImage: string | undefined;
  httpStatus: string;
}

const StatusImage: React.FC<StatusProps> = (props: any) => {
  const { httpCatImage, httpStatus } = props;
  if (!httpStatus || httpStatus === "select") return <></>;

  if (httpCatImage)
    return <img src={`data:image/png;base64,${httpCatImage}`} alt="" />;

  if (httpCatImage === undefined) return <img src={notFound} alt="" />;

  return <></>;
};

export default StatusImage;
