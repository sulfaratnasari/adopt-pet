import React, { useState } from "react";
import { Upload, Form, Input, Button} from "antd";
import ImgCrop from "antd-img-crop";

import PageLayout from "../Layout.js/PageLayout";
import './FormPetLost.css'

const {TextArea}=Input


const FormFoundPets = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  //   const onFinish = (values: ) => {
  //     console.log('Success:', values);
  //   };

  //   const onFinishFailed = (errorInfo: any) => {
  //     console.log('Failed:', errorInfo);
  //   };

  return (
    <PageLayout>
      <div style={{ height: "90vh", padding: "0 0.5rem", display:'flex', justifyContent:"center"}}>
        <div style={{ marginTop: "13vh", width: "50%" }}>
          <h2>Form Temuan Hewan</h2>
          <div style={{ display: "flex", flexDirection: "row", marginTop:'2rem'}}>
            <div style={{width:'30%', marginTop:'1.5rem', alignSelf:'start', paddingLeft:'1.5rem'}}>
              <ImgCrop >
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onChange={onChange}
                  onPreview={onPreview}
                  
                >
                  {fileList.length < 5 && "+ Upload"}
                </Upload>
              </ImgCrop>
            </div>
            <div style={{width:'70%' }}>
              <Form
                initialValues={{ remember: true }}
                //   onFinish={onFinish}
                //   onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Jenis"
                  name="Jenis"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {message: "Masukkan Jenis Hewan!" },
                  ]}
                >
                  <Input placeholder="Jenis Hewan"/>
                </Form.Item>
                <Form.Item
                  label="Lokasi"
                  name="Lokasi"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {message: "Masukkan Lokasi Anda!" },
                  ]}
                >
                  <Input placeholder="Lokasi Anda atau Lokasi Penemuan"/>
                </Form.Item>
                <Form.Item
                  label="Ciri-ciri"
                  name="Ciri-ciri"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {message: "Masukkan Ciri-ciri!" },
                  ]}
                >
                  <TextArea placeholder="Warna, Umur, Bentuk, dll" />
                </Form.Item>
                <Form.Item
                  label="Kontak Anda"
                  name="Kontak-Anda"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {message: "Masukkan Kontak Anda!" },
                  ]}
                >
                  <Input placeholder="No Handpone/WA Aktif"/>
                </Form.Item>
                <Form.Item wrapperCol={{ offset:10 }} style={{marginTop:'1.5rem'}}>
                  <Button style={{backgroundColor:'#FFBD00', fontWeight:'bold'}} htmlType="submit">
                    submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FormFoundPets;