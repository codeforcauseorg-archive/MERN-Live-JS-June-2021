import React, { Fragment, useState } from "react";
import ImageUploader from "react-images-upload";
import "react-image-crop/dist/ReactCrop.css";
import ReactCrop from "react-image-crop";
import { Button } from "@material-ui/core";
import axios from "../utils/axios";

export default function ImageUploaderComp() {
  const [crop, setCrop] = useState({ aspect: 1 });
  let [picture, setPicture] = useState();
  let [content, setContent] = useState();

  let onDrop = (pic) => {
    let selected = pic[pic.length - 1];
    setPicture(URL.createObjectURL(selected));
  };

  let getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    var dataURL = canvas.toDataURL("image/png");

    let content = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    setContent(content);

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (blob) {
            blob.name = fileName;
            resolve(blob);
          } else {
            reject("failed");
          }
        },
        "image/png",
        1
      );
    });
  };

  return (
    <Fragment>
      <ImageUploader
        withIcon={true}
        buttonText="Choose images"
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />

      {picture && (
        <ReactCrop
          src={picture}
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
        />
      )}
      <Button
        onClick={async function () {
          let img = document.getElementsByClassName("ReactCrop__image")[0];
          let result = await getCroppedImg(img, crop, "cropped.png");
          setPicture(URL.createObjectURL(result));
        }}
      >
        Crop
      </Button>

      {content && (
        <Button
          onClick={async function () {
            let result = await axios.post("http://localhost:5000/images/", {content});
            console.log(result);
          }}
        >
          Submit
        </Button>
      )}
    </Fragment>
  );
}
