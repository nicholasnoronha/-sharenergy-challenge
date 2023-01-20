import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import Loading from "../../components/Loading";
import { Button } from "../../components";
import { randomDogService } from "../../services/randomDogService";
import SuspenseImageOrGif from "../../components/SuspenseImageOrGif";

const RandomDog: React.FC = () => {
  const { token } = useAuth();
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    await fetchRandomDog();
  };

  const fetchRandomDog = async () => {
    setUrl("");
    setIsLoading(true);

    const response = await randomDogService.getRandomImageOrGif(token!);

    if (!response) return alert("404 Not Found");

    setUrl(response.data);
  };

  return (
    <div>
      <Button onClick={handleClick}>Clique Aqui!!!</Button>
      <React.Suspense fallback={isLoading && <Loading />}>
        <SuspenseImageOrGif src={url} height="500" width={400} />
      </React.Suspense>
    </div>
  );
};

export default RandomDog;
