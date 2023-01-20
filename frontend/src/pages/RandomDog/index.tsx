import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import Loading from "../../components/Loading";
import { Button } from "../../components";
import { randomDogService } from "../../services/randomDogService";
import SuspenseImageOrGif from "../../components/SuspenseImageOrGif";
import Container from "./styles";

const RandomDog: React.FC = () => {
  const { token } = useAuth();
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    fetchRandomDog();
  };

  const fetchRandomDog = async () => {
    setUrl("");
    setIsLoading(true);

    const response = await randomDogService.getRandomImageOrGif(token!);

    if (!response) return alert("404 Not Found");
    setUrl(response.data);
  };

  return (
    <Container>
      <Button
        style={{ width: "auto", marginBottom: "1vh" }}
        onClick={handleClick}
      >
        Clique Aqui!!!
      </Button>
      <React.Suspense fallback={isLoading && <Loading />}>
        <SuspenseImageOrGif src={url} height="600" width="500" />
      </React.Suspense>
    </Container>
  );
};

export default RandomDog;
