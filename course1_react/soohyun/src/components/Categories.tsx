import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdown } from "react-icons/io";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownContent = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  font-size: 30px;
  font-weight: bold;
`;

const CategoryItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const categories = [
  '고양이',
  '웹문서',
  '동영상',
  '이미지',
  '블로그',
  '책',
  '카페'
];

function Categories() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('고양이');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <CategoryContainer>
      <Category>
        {selectedCategory}
        <IoMdArrowDropdown onClick={() => setOpen(!open)} style={{cursor: 'pointer'}}/>
      </Category>
      <DropdownContent open={open}>
        {categories.map((category, index) => (
          <CategoryItem key={index} onClick={() => handleCategoryChange(category)}>
            {category}
          </CategoryItem>
        ))}
      </DropdownContent>
    </CategoryContainer>
  );
}

export default Categories;
