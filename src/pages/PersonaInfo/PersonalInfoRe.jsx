import React, { useState } from 'react'
import InputMantine from '../../components/Input/InputMantine'
import mail from '../../assets/image/header/icon/mail.svg';
import person from '../../assets/image/header/icon/name.svg';
import phone from '../../assets/image/header/icon/phone.svg';
import { useForm } from '@mantine/form';
import { ActionIcon, Box, FileInput, Image, Text } from '@mantine/core';
import { IconCamera } from '@tabler/icons-react';
const PersonalInfoRe = () => {
    const form=useForm( {
        initialValues: {
            name:'',
            phone:'',
            email:'',
            image: null,
        },
        validate:{
            name:(value)=> value ? null :'name is required',
            phone: (value)=> value ? null :'phone is required',
            email :(value)=> (/^\S+@\S+$/.test(value) ? null : 'Invalid email') 
        }
    });
    const handleSaveChanges= (values)=>{
    
    } 
    const [image,setImage]=useState(null)
    const handleImageUpload = (file) => {
        setImage(file);
        form.setFieldValue('image', file);

      };
      const handleUpdate = () => {
        const formData = new FormData();
        formData.append('name', form.values.name);
        formData.append('phone', form.values.phone);
        formData.append('email', form.values.email);
        formData.append('image', form.values.image);
      }
  return (
    <div>
        <Box sx={{ position: 'relative', width: '100px', margin: '0 auto' }}>
        {/* Image Upload Section */}
        {image ? (
          <Image
            src={URL.createObjectURL(image)}
            alt="Profile preview"
            width={100}  // Set width and height to 100px
            height={100}
            radius="50%"  // Make the image circular
            sx={{
              objectFit: 'cover',
              border: '2px solid #ccc',  // Optional border
            }}
          />
        ) : (
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              border: '2px solid #ccc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f7f7f7',
            }}
          >
            <Text color="dimmed">No Image</Text>
          </Box>
        )}

        {/* Red icon positioned on top of the image */}
        <ActionIcon
          sx={{
            position: 'absolute',
            top: '-10px',
            right: '-10px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
          }}
          onClick={() => document.getElementById('file-input').click()} // Trigger file input
        >
          <IconCamera size={16} />
        </ActionIcon>

        {/* Text under the icon for "Add new photo" */}
        <Text mt="xs" size="sm" color="dimmed">
          Add new photo
        </Text>

        {/* Hidden FileInput for image upload */}
        <FileInput
          id="file-input"
          accept="image/*"
          onChange={handleImageUpload}
          sx={{ display: 'none' }} // Hide the file input
        />
      </Box>
        <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4 " >
        <FileInput
        placeholder="Upload profile image"
        label="Profile Image"
        accept="image/*"
        {...form.getInputProps('image')}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      />

      {form.values.image && (
        <Image
          src={URL.createObjectURL(form.values.image)}
          alt="Profile preview"
          width={150} // Set the width and height to make the image circular
          height={150}
          radius="50%" // Make the image circular
          fit="cover"
          sx={{
            margin: '0 auto', // Center the image
            marginBottom: '20px',
            objectFit: 'cover',
          }}
        />
      )}
                <div className="inputsForm d-flex flex-nowrap gap-2">
                    <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4 " dir='rtl'>  
                    
                        <InputMantine
                            size={'lg'}
                            icon={<img src={mail} alt='mail' />}
                            placeholder='ادخل البريد الالكتروني *'
                        />
                    </div>
                    <div className="inputForm d-flex flex-column w-100 w-md-50 gap-3 p-4">
                            <InputMantine
                            size={'lg'}
                            icon={<img src={person} alt='person' />}
                            placeholder='ادخل اسمك الكامل *'
                        />
                    
                        <InputMantine
                            size={'lg'}
                            icon={<img src={phone} alt='phone' />}
                            placeholder='ادخل رقم الهاتف *'
                        />
                    </div>
                </div>
                       
                    </div>
    </div>
  )
}

export default PersonalInfoRe