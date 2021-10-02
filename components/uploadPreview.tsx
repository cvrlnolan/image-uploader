import React, { useState } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {
  imageUrl: string;
};

const UploadPreview = ({ imageUrl }: Props) => {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <div className="flex justify-center min-w-1/2">
        <div className="preview_wrapper">
          <CheckCircleIcon className="text-green-100 mx-auto w-12 h-12" />
          <p className="font-light text-center">Upload Successful</p>
          <div className="preview_img_box">
            <Image
              alt="uploaded_img"
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="preview_link_container">
            <span className="font-light my-auto truncate">{imageUrl}</span>
            <CopyToClipboard text={imageUrl} onCopy={() => setCopied(true)}>
              <button className="preview_copy_button">
                {copied ? "Copied!" : "Copy"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadPreview;
