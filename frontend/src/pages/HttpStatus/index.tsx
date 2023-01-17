import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import { statusMessages } from "./statusMessages";
import { httpCatService } from "../../services/httpCatService";
import StatusImage from "../../components/StatusImage";
import Loading from "../../components/Loading";

const HttpStatus: React.FC = (props) => {
  const { token } = useAuth();
  const [httpStatus, setHttpStatus] = useState<any>();
  const [httpCatImage, setHttpCatImage] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setHttpStatus(event.target.value);
  };

  const fetchHttpCat = async (httpStatus: string) => {
    if (httpStatus === "select" || !httpStatus) {
      setHttpCatImage("");
      return;
    }
    setIsLoading(true);

    const response = await httpCatService.getHttpStatus(token!, httpStatus);
    setIsLoading(false);
    if (!response) {
      setHttpCatImage(response);
    }

    const base64String = response!.data;
    setHttpCatImage(base64String);
  };

  useEffect(() => {
    fetchHttpCat(httpStatus);
  }, [httpStatus]);

  return (
    <div>
      <select onChange={handleSelectChange}>
        {statusMessages.map((status: string, index: number) => {
          if (status === "Selecione um status")
            return (
              <option key={index} value="select">
                {status}
              </option>
            );

          return (
            <option key={index} value={status}>
              {status}
            </option>
          );
        })}
      </select>
      {isLoading && <Loading />}
      <StatusImage httpCatImage={httpCatImage} httpStatus={httpStatus} />
    </div>
  );
};

export default HttpStatus;