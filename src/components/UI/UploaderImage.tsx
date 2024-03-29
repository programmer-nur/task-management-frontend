/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { Upload, Progress, message, Modal } from "antd";
import axios, { AxiosResponse } from "axios";
import { PlusOutlined } from "@ant-design/icons";
import { RcFile, UploadFile } from "antd/es/upload";
import { useFormContext } from "react-hook-form";

type ImageUploadProps = {
  name: string;
  updateImage?: string;
  defaultValue?: any;
};

const UploaderImage = ({
  name,
  updateImage,
  defaultValue,
}: ImageUploadProps) => {
  const {setValue} = useFormContext()

  const [defaultFileList, setDefaultFileList] = useState<any[]>(
    updateImage
      ? [
          {
            uid: "-1",
            name: "image.png",
            status: "done",
            url: updateImage,
          },
        ]
      : []
  );
  const [progress, setProgress] = useState<number>(0);

  //   const { setValue } = useFormContext();

  const uploadImage = async ({ onSuccess, onError, file, onProgress }: any) => {
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event: any) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };

    fmData.append("image", file);

    try {
      const res: AxiosResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=8576687a813b75f4d79dfe220f3daa61`,
        fmData,
        config
      );

      onSuccess("Ok");
      setValue(name, res?.data?.data);
    } catch (err) {
      message.error("Upload Failed");
      onError(err);
    }
  };

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleOnChange = ({ file, fileList, event }: any) => {
    setDefaultFileList(fileList);
  };
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(defaultValue || "");

  console.log(previewImage);
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };
  const handleCancel = () => setPreviewOpen(false);
  return (
    <>
      <div className="container">
        <Upload
          accept="image/*"
          customRequest={uploadImage}
          onChange={handleOnChange}
          listType="picture-circle"
          defaultFileList={defaultFileList}
          className="image-upload-grid"
          onPreview={handlePreview}
        >
          {defaultFileList.length >= 1 ? null : (
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
        {progress > 0 ? <Progress percent={progress} /> : null}
      </div>
      {defaultValue && !previewOpen && (
        <img alt="example" style={{ width: "100px" }} src={previewImage} />
      )}
      <Modal open={previewOpen} footer={null} onCancel={handleCancel} centered>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploaderImage;
