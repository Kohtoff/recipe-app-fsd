import { useRef, useState } from "react";

type Props = {
  placeholder?: string;
  helperText?: string;
  name?: string
};

export const FileInput = ({
  placeholder = "Add Cover Photo",
  helperText = "(up to 12 Mb)",
  name
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const openUploadDialog = () => {
    console.log(inputRef.current);
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div
      onClick={openUploadDialog}
      className="rounded-2xl border-2 py-[17px] aspect-video overflow-hidden relative border-outline border-dashed flex items-center flex-col justify-center w-full"
    >
      {file ? (
        <img className="" src={file} alt="Uploaded preview" />
      ) : (
        <>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4431 58.6667H43.5541C52.5949 58.6667 58.6666 52.3251 58.6666 42.8888V21.1113C58.6666 11.675 52.5949 5.33337 43.5568 5.33337H20.4431C11.405 5.33337 5.33325 11.675 5.33325 21.1113V42.8888C5.33325 52.3251 11.405 58.6667 20.4431 58.6667ZM22.6635 29.3334C18.9872 29.3334 15.9999 26.3421 15.9999 22.6667C15.9999 18.9913 18.9872 16 22.6635 16C26.3372 16 29.3272 18.9913 29.3272 22.6667C29.3272 26.3421 26.3372 29.3334 22.6635 29.3334ZM52.8554 39.8239C53.7484 42.1136 53.2845 44.8655 52.3298 47.1332C51.1982 49.8301 49.0316 51.8721 46.3017 52.7637C45.0897 53.16 43.8186 53.3334 42.5503 53.3334H20.0763C17.8399 53.3334 15.8609 52.7967 14.2386 51.7978C13.2223 51.1703 13.0426 49.7228 13.7961 48.7844C15.0565 47.2157 16.3007 45.6416 17.5557 44.0537C19.9476 41.0155 21.5592 40.1349 23.3505 40.9082C24.0772 41.2274 24.8065 41.7063 25.5574 42.2126C27.5578 43.5721 30.3386 45.4407 34.0015 43.4125C36.5082 42.0086 37.9621 39.6004 39.2281 37.5033L39.2493 37.4682C39.339 37.3211 39.4279 37.174 39.5166 37.0273L39.5166 37.0272C39.9421 36.3232 40.3619 35.6286 40.8368 34.9887C41.4321 34.1879 43.639 31.6836 46.4975 33.4668C48.3183 34.5897 49.8494 36.1087 51.4878 37.7352C52.1126 38.3571 52.5578 39.0644 52.8554 39.8239Z"
              fill="#9FA5C0"
            />
          </svg>

          <h3 className="text-typography-primary">{placeholder}</h3>
          <small className="text-typography-secondary">{helperText}</small>
        </>
      )}
      <input
        name={name}
        ref={inputRef}
        onChange={handleFileChange}
        type="file"
        className="sr-only"
      />
    </div>
  );
};