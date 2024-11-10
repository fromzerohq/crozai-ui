// components/Editor/styles.js
import styled, { css } from "styled-components";

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  fullWidth?: boolean;
}

interface TabProps {
  active?: boolean;
}

interface IconButtonProps {
  active?: boolean;
}

interface BottomTabButtonProps {
  active?: boolean;
}

export const EditorLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #1e1e1e, #262626);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
`;

export const TopBar = styled.div`
  height: 60px;
  background: #2a2a2a;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #4db3ff;
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
  flex: 1;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  width: 280px;
  background: #2a2a2a;
  border-right: 1px solid #333;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SidebarHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #333;
  color: #e0e0e0;
  background: linear-gradient(145deg, #333, #2a2a2a);
`;

export const SidebarContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  color: #ddd;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #444;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }
`;

export const Canvas = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #1e1e1e, #262626);
`;

export const CanvasToolbar = styled.div`
  height: 50px;
  background: #333;
  border-bottom: 1px solid #444;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 24px;
`;

export const CanvasArea = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const CanvasContent = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2a2a2a;
  background-image: linear-gradient(
      45deg,
      rgba(80, 80, 80, 0.2) 25%,
      transparent 25%
    ),
    linear-gradient(-45deg, rgba(80, 80, 80, 0.2) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(80, 80, 80, 0.2) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(80, 80, 80, 0.2) 75%);
  background-size: 20px 20px;
  background-position:
    0 0,
    0 10px,
    10px -10px,
    -10px 0px;
`;

export const CanvasBottom = styled.div`
  height: 200px;
  background: #2a2a2a;
  border-top: 1px solid #333;
  display: flex;
  flex-direction: column;
`;

export const RightPanel = styled.div`
  width: 320px;
  background: #2a2a2a;
  border-left: 1px solid #333;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #444;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }
`;

export const TabBar = styled.div`
  display: flex;
  gap: 4px;
  padding: 0 16px;
  border-bottom: 1px solid #444;
  background: #333;
`;

export const Tab = styled.button<TabProps>`
  padding: 12px 16px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  color: ${(props) => (props.active ? "#4db3ff" : "#bbb")};
  border-bottom: 2px solid
    ${(props) => (props.active ? "#4db3ff" : "transparent")};
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover {
    color: #4db3ff;
    background: ${(props) => (props.active ? "transparent" : "#333")};
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;

  ${(props) =>
    props.primary &&
    css`
      background: linear-gradient(145deg, #4db3ff, #367ab7);
      color: white;

      &:hover {
        background: linear-gradient(145deg, #367ab7, #4db3ff);
      }
    `}

  ${(props) =>
    props.secondary &&
    css`
      background: #444;
      color: #ddd;

      &:hover {
        background: #555;
      }
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

export const MediaBox = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background: #333;
  border: 1px solid #444;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #444;
    border-color: #4db3ff;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 16px;
`;

export const IconButton = styled.button<IconButtonProps>`
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
    background: #444;
    color: #4db3ff;
  }

  ${(props) =>
    props.active &&
    css`
      color: #4db3ff;
      background: #333;
    `}
`;

export const PropertyPanel = styled.div`
  padding: 16px;
  color: #ddd;
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
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 14px;
  background: #2a2a2a;
  color: #ddd;
  transition: all 0.2s;

  &:focus {
    border-color: #4db3ff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(77, 179, 255, 0.2);
  }
`;

// Container for the bottom tabs under Canvas
export const BottomTabs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #333;
  padding: 8px 0;
  border-top: 1px solid #444;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
`;

export const BottomTabButton = styled.button<BottomTabButtonProps>`
  flex: 1;
  padding: 12px;
  border: none;
  background: #333;
  color: ${(props) => (props.active ? "#4db3ff" : "#bbb")};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  border-top: 3px solid ${(props) => (props.active ? "#4db3ff" : "transparent")};

  &:hover {
    color: #4db3ff;
    background: #2a2a2a;
  }
`;

// Individual tab button inside BottomTabs
export const TabOption = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  color: #555;
  font-weight: 500;
  text-align: center;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    color: #007bff;
    background-color: #e7f1ff;
  }

  &.active {
    color: #fff;
    background-color: #007bff;
    border-radius: 4px;
  }
`;
