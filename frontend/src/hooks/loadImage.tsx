import { useEffect } from "react";

interface Resource<Payload> {
  read: () => Payload;
}

type status = "pending" | "success"; // | "error";

function createResource<Payload>(
  asyncFn: () => Promise<Payload>
): Resource<Payload> {
  let status: status = "pending";
  let result: any;

  const promise = asyncFn().then(
    (r: Payload) => {
      status = "success";
      result = r;
    }
    // (e: Error) => {
    //   status = "error";
    //   result = e;
    // }
  );
  return {
    read(): Payload {
      switch (status) {
        case "pending":
          throw promise;
        // case "error":
        //   throw result;
        case "success":
          return result;
      }
    },
  };
}

const cache = new Map<string, any>();

export function loadImage(source: string): Resource<string> {
  let resource = cache.get(source);

  if (resource) return resource;
  resource = createResource<string>(
    () =>
      new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = source;
        img.addEventListener("load", () => resolve(source));
        // img.addEventListener("error", () =>
        //   reject(new Error(`Failed to load image ${source}`))
        // );
      })
  );
  cache.set(source, resource);
  return resource;
}
