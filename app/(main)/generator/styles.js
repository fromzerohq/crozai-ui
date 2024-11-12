// components/Editor/styles.js
import styled, { css, keyframes } from 'styled-components';

export const EditorLayout = styled.div`
 display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  font-family: 'Segoe UI', Tahoma, Geneva, sans-serif;
`;

export const TopBar = styled.div`
height: 60px;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #a4c8f0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TopBarActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const MainContent = styled.div`
   display: flex;
  flex: 1; /* Take remaining space */
  overflow: hidden; /* Prevent scrolling here */
`;

export const Sidebar = styled.div`
   width: 280px;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* No internal scrolling */
`;

export const SidebarHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #333;
  color: #d3d3d3;
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  color: #ccc;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #222;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }
`;

const iconHover = keyframes`
 0% {
    transform: scale(1);
    color: #aaa;
  }
  100% {
    transform: scale(1.3);
    color: #a4c8f0;
  }
`;

export const Canvas = styled.div`
   display: flex;
  flex-direction: column;
  flex: 1; /* Allow it to take the remaining space */
  height: 100%; /* Full height */
  position: relative;

`;

export const CanvasScrollWrapper = styled.div`
    display: flex;
  overflow-x: auto;
  flex-direction: row;
  width: 100%;
  height: 100%; /* Take full height of parent */
  padding-bottom: 16px; /* Space at the bottom */
`;

export const CanvasToolbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
//   border-bottom: 1px solid #333;
  position: sticky;
  top: 0;  /* Stick to the top */
  z-index: 2;
`;

export const CanvasArea = styled.div`
 flex-shrink: 0;
  margin-top: 60px;  /* Make space for the sticky toolbar */
  width: 100%;
  padding: 20px;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  scrollbar-width: thin;
  scrollbar-color: #444 #222;
  margin-top: -3px;
  /* Enable vertical scrolling */
  overflow-y: auto;  
  
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #222;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }
`;

export const CanvasContent = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  padding-bottom: 200px;
`;

export const CanvasBottom = styled.div`
  flex-shrink: 0;
  margin-top: 16px;  /* Ensure no overlap */
  width: 100%;
  height: 400px;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
//   border-top: 1px solid #333;
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: #ddd;
  box-sizing: border-box;
  overflow-y: auto;
  margin-top: -185px;
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #222;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }
`;

export const RightPanel = styled.div`
  width: 450px;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  border-left: 1px solid #333;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #222;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 4px;
  }
`;

export const TabBar = styled.div`
  display: flex;
  gap: 4px;
  padding: 0 16px;
  border-bottom: 1px solid #333;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
`;

export const Tab = styled.button`
 display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  color: #aaa;
  font-size: 14px;
  transition: all 0.3s ease;
  margin-right: 16px;
  font-weight: normal;
  z-index: 1;

  &:hover {
    transform: scale(1.2);
    color: #a4c8f0;
  }

  ${props => props.active && css`
    color : #fffff;
    font-weight: bold;
    font-size: 18px; /* Larger font size for active tab */
    transform: scale(1.2); /* Make active tab larger */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); /* Drop shadow for depth */
    z-index: 2; /* Bring active tab above others */
  `}

  svg {
    margin-right: 8px;
    transition: transform 0.3s ease, color 0.3s ease;
    &:hover {
      transform: scale(1.3);
      color: #a4c8f0;
    }
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  ${props => props.primary && css`
    background: #1e2e3e;
    color: #a4c8f0;

    &:hover {
      background: #354f6b;
    }
  `}

  ${props => props.secondary && css`
    background: #333;
    color: #ddd;

    &:hover {
      background: #444;
    }
  `}

  ${props => props.fullWidth && css`
    width: 100%;
    justify-content: center;
  `}
`;

export const MediaBox = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #111;
  border: 1px solid #333;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #333;
    border-color: #a4c8f0;
    transform: translateY(-1px);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  svg {
    transition: transform 0.3s ease, color 0.3s ease;
    &:hover {
      transform: scale(1.3);
      color: #a4c8f0;
    }
  }
`;


export const IconButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  transition: all 0.2s;

  &:hover {
    background: #222;
    color: #a4c8f0;
  }

  ${props => props.active && css`
    color: #a4c8f0;
    background: #333;
  `}
`;

export const PropertyPanel = styled.div`
  padding: 16px;
  color: #ddd;
  background: #1a1a1a;
`;

export const PropertySection = styled.div`
  margin-bottom: 24px;
`;

export const PropertyTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #bbb;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 14px;
  background: #111;
  color: #ddd;
  transition: all 0.2s;

  &:focus {
    border-color: #a4c8f0;
    outline: none;
  }
`;

export const BottomTabs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(109.6deg, #0d0d0d 10%, #1a1a1a 90%);
  padding: 8px 0;
  border-top: 1px solid #333;
`;
