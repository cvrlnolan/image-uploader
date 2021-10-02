import React, { useState, useCallback } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PhotographIcon } from "@heroicons/react/solid";
import { useDropzone } from "react-dropzone";
// import axios from "axios";
import initFirebase from "@/lib/firebaseInit";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import UploadProgress from "@/components/uploadProgress";
import UploadPreview from "@/components/uploadPreview";

initFirebase();

const storage = getStorage();

const storageRef = ref(storage, new Date().toISOString());

type Image = {
  imageFile: Blob;
};

const Home: NextPage = () => {
  let [progress, setProgress] = useState<number>(0);

  const [imageUrl, setImageUrl] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    // Upload files to storage
    const file = acceptedFiles[0];
    uploadImage({ imageFile: file });
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    onDrop,
  });

  //Using Cloudinary

  // const uploadImage = async ({ imageFile }: Image) => {
  //   setLoading(false);
  //   const uploadURL = process.env.NEXT_PUBLIC_UPLOAD_URL as string;
  //   const uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET as string;
  //   const formData = new FormData();
  //   try {
  //     formData.append("file", imageFile);
  //     formData.append("upload_preset", uploadPreset);
  //     const response = await axios.post(uploadURL, formData, {
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     });
  //     console.log(response.data);
  //     setLoading(false);
  //   } catch (e: any) {
  //     console.log(e.message);
  //     setLoading(false);
  //   }
  // };

  // Firebase Storage

  const uploadImage = async ({ imageFile }: Image) => {
    try {
      setLoading(true);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUrl(downloadURL);
            setLoading(false);
            setSuccess(true);
          });
        }
      );
    } catch (e: any) {
      console.log(e.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Image Uploader</title>
      </Head>
      <div className="main_container">
        {/* <p className="text-center">Image Upload Component</p> */}
        {!success && (
          <div
            className={` ${loading ? "hidden" : ""} flex justify-center mt-10`}
          >
            <div className="dropzone">
              <p className="text-center font-bold">Upload your image</p>
              <p className="text-center font-light">
                File should be jpeg, png...
              </p>
              <div {...getRootProps()} className="drag_drop_wrapper">
                <input hidden {...getInputProps()} />
                <PhotographIcon className="w-16 h-16 self-center text-blue-200" />
                {isDragActive ? (
                  <p className="text-center font-light">
                    Drop the photo here...
                  </p>
                ) : (
                  <p className="text-center font-light">
                    Drag & Drop your image here
                  </p>
                )}
              </div>
              <p className="text-center font-light">Or</p>
              <div className="flex justify-center">
                <button onClick={open} className="dropzone_button">
                  Choose a file
                </button>
              </div>
            </div>
          </div>
        )}

        {/* <p className="text-center mt-6">Upload Progress Component</p> */}
        {loading && <UploadProgress progress={progress} />}

        {/* <p className="text-center mt-6">Upload Complete Component</p> */}
        {success && <UploadPreview imageUrl={imageUrl} />}

        <footer className="bottom-0 my-3">
          <div className="flex justify-center mb-0">
            <p className="text-center font-mono tracking-tight">
              Designed & Developped by{" "}
              <a
                href="https://carlnolan.lootyclub.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                Carl Nolan.
              </a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
