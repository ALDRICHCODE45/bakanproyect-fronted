import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, Card, Typography } from "antd";
import { useAuthStore } from "../../hooks/useAuthStore";
import { ROLES } from "../../auth/roles";
import { EmptyData } from "./EmptyData";

export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const UploadImages = () => {
  const { user } = useAuthStore();
  const { rol } = user;
  const { Title } = Typography;

  const puedeSubirImagenes = rol === ROLES.ADMIN || rol === ROLES.CHOFERES;

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Card
        className="animate__animated animate__fadeInUp"
        style={{ marginTop: "20px" }}
      >
        <Title level={4}>Subir Imágenes</Title>
        {puedeSubirImagenes ? (
          <>
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 5 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </>
        ) : (
          <EmptyData text={"subir imagenes"} />
        )}
      </Card>
    </>
  );
};
