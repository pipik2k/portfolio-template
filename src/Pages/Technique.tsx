// src/Pages/TechniquePage.tsx

import React from "react";
import styled from "styled-components";
// IMPORT DỮ LIỆU TỪ FILE RIÊNG
import { 
    PersonalInfo, 
    techStack, 
    designPatterns, 
    optimizationTechniques, 
    DesignPattern, 
    OptimizationTechnique,
} from "../techniquedata"; 


// 3. STYLED COMPONENTS 

const AboutSection = styled.section`
  width: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #4da3ff;
  box-shadow: 0 10px 40px rgba(77, 163, 255, 0.3);
  margin-bottom: 24px;
`;

const Name = styled.h1`
  font-size: 36px;
  margin: 0 0 8px 0;
  color: #fff;
`;

const Role = styled.h2`
  font-size: 20px;
  margin: 0 0 24px 0;
  color: #4da3ff;
  font-weight: 400;
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #4da3ff;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: #3d8cd9;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(77, 163, 255, 0.4);
  }
`;

const InfoSection = styled.div`
  color: white;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 48px;
`;

const TechSection = styled.div`
  margin-top: 32px;
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  color: #fff;
  margin: 0 0 24px 0;
  border-bottom: 2px solid #4da3ff;
  padding-bottom: 12px;
`;

const TechGrid = styled.div`
  display: grid;
  // Sử dụng repeat(auto-fit, ...) để tự động tạo 3-4 cột nếu có đủ không gian
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 24px;
  
  @media (max-width: 600px) {
    // Trên di động, chuyển về 1 cột để dễ đọc
    grid-template-columns: 1fr;
  }
`;


const TechCard = styled.div`
  background: rgba(26, 26, 46, 0.6);
  border: 1px solid #2a2a4a;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s;
  height: 100%; /* Đảm bảo chiều cao đồng nhất */

  &:hover {
    border-color: #4da3ff;
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(77, 163, 255, 0.2);
  }
`;

const TechCategory = styled.h4`
  font-size: 18px;
  color: #4da3ff;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TechList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  // 🎯 SỬA ĐỔI: Sử dụng Grid để chia 2 cột chắc chắn
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Đảm bảo 2 cột bằng nhau */
  gap: 8px 15px; /* Khoảng cách dọc và ngang */

  @media (max-width: 450px) {
    // Trên màn hình rất nhỏ (như điện thoại), quay lại 1 cột
    grid-template-columns: 1fr;
  }
`;

const TechItem = styled.li`
  font-size: 14px;
  color: #bbb;
  padding: 3px 0; /* Giảm padding để gọn hơn */
  display: flex;
  align-items: center;
  gap: 8px;
  
  // 🎯 XÓA CÁC THUỘC TÍNH FLEX/WIDTH BỊ CAN THIỆP:
  /* Đã bỏ width: 50%; break-inside: avoid; */

  &:before {
    content: "▹";
    color: #4da3ff;
    font-weight: bold;
  }
`;

const DesignPatternsSection = styled.div`
  margin-top: 32px;
`;

const OptimizationSection = styled.div`
  margin-top: 48px;
`;

// 🎯 ĐIỀU CHỈNH 2: Tối ưu minmax để hiển thị 3-4 cột đẹp hơn
const PatternGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 16px;
`;

const PatternBadge = styled.div`
  background: linear-gradient(135deg, #1e3a5f 0%, #2a4a6a 100%);
  border: 1px solid #4da3ff;
  border-radius: 8px;
  padding: 12px 16px;
  text-align: center;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;

  &:hover {
    background: linear-gradient(135deg, #2a4a6a 0%, #3a5a7a 100%);
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(77, 163, 255, 0.3);
    z-index: 50;
  }

  &:hover .preview-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const PatternName = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 15px;
`;

const PatternType = styled.div`
  color: #4da3ff;
  font-size: 12px;
  margin-top: 4px;
`;

const PreviewTooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: #1e1e1e;
  border: 1px solid #4da3ff;
  border-radius: 8px;
  padding: 12px;
  width: 300px;
  max-width: 90vw;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  z-index: 100;
  margin-top: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #4da3ff;
  }
`;

const PreviewText = styled.p`
  color: #bbb;
  font-size: 12px;
  line-height: 1.4;
  margin: 0 0 8px 0;
`;

const ClickHint = styled.div`
  color: #4da3ff;
  font-size: 11px;
  text-align: center;
  font-weight: 600;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid #333;
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: ${props => props.isOpen ? 'fadeIn 0.2s' : 'none'};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: #1e1e1e;
  border-radius: 12px;
  padding: 32px;
  max-width: 900px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  border: 2px solid #4da3ff;
  position: relative;
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #0d1117;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #4da3ff;
    border-radius: 5px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #4da3ff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s;
  z-index: 10;

  &:hover {
    background: #3d8cd9;
    transform: scale(1.05);
  }
`;

const ModalTitle = styled.h2`
  color: #4da3ff;
  margin: 0 0 8px 0;
  font-size: 32px;
  padding-right: 100px;
`;

const ModalType = styled.div`
  color: #888;
  font-size: 14px;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionBlock = styled.div`
  margin-bottom: 24px;
`;

const SectionLabel = styled.h3`
  color: #fff;
  font-size: 18px;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  span {
    color: #4da3ff;
    font-size: 20px;
  }
`;

const SectionText = styled.p`
  color: #ccc;
  font-size: 15px;
  line-height: 1.7;
  margin: 0;

  &.ul {
    list-style: disc;
    margin-left: 20px;
    padding: 0;
  }
`;

const CodeBlock = styled.pre`
  background: #0d1117;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid #30363d;
  margin: 0;

  code {
    color: #c9d1d9;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.6;
  }
`;

const OptimizationImage = styled.img`
    max-width: 100%;
    height: auto;
    border: 2px solid #4da3ff;
    border-radius: 8px;
    margin-top: 15px;
`;


// --- 4. LOGIC COMPONENT CHÍNH ---

const TechniquePage: React.FC = () => {
    const [selectedPattern, setSelectedPattern] = React.useState<DesignPattern | null>(null);
    const [selectedTechnique, setSelectedTechnique] = React.useState<OptimizationTechnique | null>(null);

    const selectedItem = selectedPattern || selectedTechnique;

    const handleCloseModal = () => {
        setSelectedPattern(null);
        setSelectedTechnique(null);
    };

    const OPTIMIZATION_IMAGE_PATH = "/optimization/"; 

    return (
        <AboutSection>
            <Container>
                <ContentWrapper>
                    <ProfileSection>
                        <ProfileImage src={PersonalInfo.image} alt={PersonalInfo.name} />
                        <Name>{PersonalInfo.name}</Name>
                        <Role>{PersonalInfo.role}</Role>
                        <CVButton href={PersonalInfo.cvUri || "#"} download>📄 Download CV</CVButton>
                    </ProfileSection>

                    <InfoSection>
                        <Description>{PersonalInfo.description}</Description>

                        {/* PHẦN TECHNICAL SKILLS */}
                        <TechSection>
                          <SectionTitle>Technical Skills</SectionTitle>
                          <TechGrid>
                              {techStack.map((tech, index) => (
                                  <TechCard key={index}>
                                      <TechCategory><span>{tech.icon}</span> {tech.category}</TechCategory>
                                      <TechList>
                                          {tech.items.map((item, i) => <TechItem key={i}>{item}</TechItem>)}
                                      </TechList>
                                  </TechCard>
                              ))}
                          </TechGrid>
                        </TechSection>


                        {/* PHẦN DESIGN PATTERNS */}
                        <DesignPatternsSection>
                            <SectionTitle>Design Patterns & Architectures</SectionTitle>
                            <PatternGrid>
                                {designPatterns.map((pattern, index) => (
                                    <PatternBadge 
                                        key={`p-${index}`}
                                        onClick={() => {
                                            setSelectedTechnique(null);
                                            setSelectedPattern(pattern);
                                        }}
                                    >
                                        <PatternName>{pattern.name}</PatternName>
                                        <PatternType>{pattern.type}</PatternType>
                                        <PreviewTooltip className="preview-tooltip">
                                            <PreviewText>
                                                <strong>📝</strong> {pattern.description}
                                            </PreviewText>
                                            <ClickHint>👆 Click to view full code</ClickHint>
                                        </PreviewTooltip>
                                    </PatternBadge>
                                ))}
                            </PatternGrid>
                        </DesignPatternsSection>

                        {/* PHẦN OPTIMIZATION TECHNIQUES */}
                        <OptimizationSection>
                            <SectionTitle>
                                Performance Optimization Techniques
                            </SectionTitle>
                            <PatternGrid>
                                {optimizationTechniques.map((tech, index) => (
                                    <PatternBadge
                                        key={`t-${index}`}
                                        onClick={() => {
                                            setSelectedPattern(null);
                                            setSelectedTechnique(tech);
                                        }}
                                    >
                                        <PatternName>{tech.name}</PatternName>
                                        <PatternType>{tech.category}</PatternType>
                                        <PreviewTooltip className="preview-tooltip">
                                            <PreviewText>
                                                <strong>⚙️</strong> {tech.description}
                                            </PreviewText>
                                            <ClickHint>👆 Click to view details and steps</ClickHint>
                                        </PreviewTooltip>
                                    </PatternBadge>
                                ))}
                            </PatternGrid>
                        </OptimizationSection>
                    </InfoSection>
                </ContentWrapper>
            </Container>

            {/* MODAL (Hiển thị chi tiết) */}
            <Modal 
                isOpen={selectedItem !== null} 
                onClick={handleCloseModal}
            >
                {selectedItem && (
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={handleCloseModal}>
                            ✕ Close
                        </CloseButton>
                        
                        <ModalTitle>{selectedItem.name}</ModalTitle>
                        <ModalType>
                            {selectedPattern 
                                ? selectedPattern.type + ' Pattern'
                                : selectedTechnique?.category + ' Technique'
                            }
                        </ModalType>
                        
                        <SectionBlock>
                          <SectionLabel><span>📝</span> Description</SectionLabel>
                          <SectionText>{selectedItem.description}</SectionText>
                        </SectionBlock>
                        
                        {/* Chi tiết Design Pattern */}
                        {selectedPattern && (
                            <>
                                <SectionBlock>
                                  <SectionLabel><span>💡</span> Use Case</SectionLabel>
                                  <SectionText>{selectedPattern.useCase}</SectionText>
                                </SectionBlock>
                                
                                <SectionBlock>
                                  <SectionLabel><span>💻</span> Implementation (C# Example)</SectionLabel>
                                  <CodeBlock>
                                    <code>{selectedPattern.code}</code>
                                  </CodeBlock>
                                </SectionBlock>
                            </>
                        )}

                        {/* Chi tiết Optimization Technique */}
                        {selectedTechnique && (
                            <>
                                <SectionBlock>
                                    <SectionLabel><span>🚀</span> Performance Impact</SectionLabel>
                                    <SectionText>{selectedTechnique.impact}</SectionText>
                                </SectionBlock>

                                <SectionBlock>
                                    <SectionLabel><span>⚙️</span> Implementation Steps</SectionLabel>
                                    <SectionText as="ul" className="ul">
                                        {selectedTechnique.steps.map((step, i) => (
                                            <li key={i}>{step}</li>
                                        ))}
                                    </SectionText>
                                </SectionBlock>

                                <SectionBlock>
                                    <SectionLabel><span>🖼️</span> Visual Proof / Profiler Snapshot</SectionLabel>
                                    <SectionText>
                                        {selectedTechnique.imageContext}
                                    </SectionText>
                                    <OptimizationImage 
                                        src={`${OPTIMIZATION_IMAGE_PATH}${selectedTechnique.imageFile}`} 
                                        alt={selectedTechnique.name} 
                                    />
                                </SectionBlock>
                            </>
                        )}

                    </ModalContent>
                )}
            </Modal>
        </AboutSection>
    );
};

export default TechniquePage;