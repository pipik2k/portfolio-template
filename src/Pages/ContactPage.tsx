import React, { useState } from 'react';
import styled from 'styled-components';
import { Column } from '../Styles/StyledComponents';

// --- 1. STYLED COMPONENTS (Cập nhật màu Zalo và tên nút) ---

const CenterContainer = styled(Column)`
  align-items: center;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

const ContactContainer = styled(Column)`
  width: 30vw;
  padding: 30px 60px;
  align-items: center;

  background-color: #121212;
  border-radius: 10px;
  color: white;
  
  @media (max-width: 768px) {
    width: 70vw;
    padding: 10px 30px;
  }
`;

const Title = styled.h2`
  margin: 30px;
  
  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 15px;
  }
`;

const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  
  // 🎯 SỬA: Màu xanh Zalo
  background-color: #0076ff; 
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    // 🎯 SỬA: Màu hover Zalo
    background-color: #0060cc; 
  }
`;

const ContactMe: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  
  // 🎯 THAY THẾ bằng ID Zalo hoặc số điện thoại đã liên kết
  const ZALO_TARGET = 'YOUR_ZALO_ID_OR_PHONE_NUMBER'; 

  const handleSubmit = () => {
    // 1. Định dạng tin nhắn (Không cần encodeURIComponent cho \n trong Zalo)
    const formattedMessage = `Xin chào, tôi là ${name}.%0A%0A${message}`;
    
    // 2. Định dạng URL Zalo
    // Dạng 1: Mở chat trực tiếp qua ID Zalo (Dạng phổ biến nhất để liên hệ)
    // Cần thay ID Zalo (ví dụ: '1234567890') vào biến ZALO_TARGET
    const url = `https://zalo.me/s/${ZALO_TARGET}?text=${formattedMessage}`;
    
    // Dạng 2: Gọi số điện thoại Zalo (Nếu ZALO_TARGET là số điện thoại)
    // const url = `https://zalo.me/call?phone=${ZALO_TARGET}`;

    window.open(url, '_blank');
  };

  return (
    <CenterContainer>
      <ContactContainer>
        <Title>Contact Me</Title>
        <Input
          type="text"
          placeholder="Tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextArea
          placeholder="Tin nhắn của bạn"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={handleSubmit}>💬 Gửi Tin Nhắn Zalo</Button>
      </ContactContainer>
    </CenterContainer>
  );
};

export default ContactMe;