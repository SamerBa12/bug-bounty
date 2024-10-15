import React, { useRef, useState } from "react";
import InputMantine from "../../components/Input/InputMantine";
import { useForm } from "@mantine/form";
import {
  ActionIcon,
  Avatar,
  Box,
  FileInput,
  Input,
  Paper,
  Text,
  Textarea,
} from "@mantine/core";
import { Header } from "../../components/Header/Header";
import { Buttonn } from "../../components/Button/Button";
import { ResetPassword } from "../../components/ResetPassword/ResetPassword";
import { IconLogout, IconPhotoEdit } from "@tabler/icons-react";

const PersonalInfoRe = ({ fields, button, image }) => {
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      image: null,
    },
    validate: {
      name: (value) => (value ? null : "name is required"),
      phone: (value) => (value ? null : "phone is required"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleImageUpload = (file) => {
    setImage(file);
    form.setFieldValue("image", file);
  };
  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("name", form.values.name);
    formData.append("phone", form.values.phone);
    formData.append("email", form.values.email);
    formData.append("image", form.values.image);
  };
  const inputFileRef = useRef(null);

  const handleuplode = () => {
    inputFileRef.current.click();
  };
  const handlelogout = () => {};
  return (
    <div className="backgroun ">
      <div className="backgroun-content ">
        <Header />
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <Paper my={30}> */}
          <Box>
            <Avatar src={image} size={120} radius={120} mx="auto" my={10} />
            <IconLogout
              cursor={"pointer"}
              onClick={handlelogout}
              color="white"
              style={{
                position: "absolute",
                top: "120px",
                right: "470px",
                width: "35px",
                height: "35px",
                borderRadius: "40px",
                padding: "8px",
                backgroundColor: "#B21222",
              }}
            />

            <IconPhotoEdit
              cursor={"pointer"}
              onClick={handleuplode}
              color="white"
              style={{
                position: "absolute",
                top: "130px",
                right: "678px",
                width: "35px",
                height: "35px",
                borderRadius: "40px",
                padding: "8px",
                backgroundColor: "#B21222",
              }}
            />

            <Text mb={20} size="sm" ta="center">
              أضف صورة جديدة
            </Text>
            <FileInput
              id="file-input"
              accept="image/*"
              onChange={handleImageUpload}
              ref={inputFileRef}
              style={{ display: "none" }}
            />

            <div className="d-flex flex-column">
              <div className="d-flex flex-nowrap">
                {fields.slice(0, 2).map((field, index) => (
                  <div
                    key={index}
                    className={`d-flex flex-column ${field.className}`}
                    dir="rtl"
                  >
                    <Input
                      variant="unstyled"
                      style={{
                        border: "1px solid black",
                        backgroundColor: "transparent",
                        borderRadius: "5px",
                      }}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      {...form.getInputProps(field.name)}
                    />
                  </div>
                ))}
              </div>

              <div className="d-flex flex-nowrap">
                {fields.slice(2).map((field, index) => (
                  <div
                    key={index}
                    className={`d-flex flx-column ${field.className}`}
                    dir="rtl"
                  >
                    <Input
                      variant="unstyled"
                      style={{
                        border: "1px solid black",
                        backgroundColor: "transparent",
                        borderRadius: "5px",
                      }}
                      icon={field.icon}
                      placeholder={field.placeholder}
                      value={field.value}
                      {...form.getInputProps(field.name)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                paddingRight: "20px",
              }}
            >
              <Textarea
                variant="unstyled"
                style={{
                  border: "1px solid black",
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                }}
                className="w-75 p-4 mt-2"
              />
            </div>
            <div className="pt-2">
              <ResetPassword />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {button.map((button, index) => (
                <div key={index}>
                  <Buttonn
                    variant={button.variant}
                    color={button.color}
                    title={button.title}
                    size={button.size}
                    className={button.className}
                  />
                </div>
              ))}
            </div>
          </Box>
          {/* </Paper> */}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoRe;
