"use client";
import React, { useState } from "react";
import { LayersList } from "./LayersList";
import { RightPanelContent } from "./RightPanelContent";
import { BottomPanel } from "./BottomPanel";
import {
  ChevronDown,
  ChevronRight,
  Eye,
  Lock,
  Trash2,
  Type,
  Image,
  Folder,
  Layout,
  Shapes,
  Share,
  Download,
  Plus,
  Layers,
} from "lucide-react";
import BottomTabsComponent from "./BottomTab";
import * as S from "./styles";

export default function Editor() {
  const [activeTab, setActiveTab] = useState("template");
  const [activeBottomTab, setActiveBottomTab] = useState("description");
  const [selectedLayer, setSelectedLayer] = useState(null);

  const TABS = [
    { id: "template", label: "Template", icon: Layout },
    { id: "Text", label: "Text", icon: Type },
    { id: "MEDIA_ITEMS", label: "Media", icon: Image },
    { id: "Shapes", label: "Shapes", icon: Shapes },
  ];

  const BOTTOM_TABS = [
    { id: "description", label: "Description", icon: Type },
    { id: "layers", label: "Layers", icon: Layers },
    { id: "settings", label: "Settings", icon: Type },
  ];

  return (
    <S.EditorLayout>
      <S.TopBar>
        <S.Logo>CrozAI Editor</S.Logo>
        <S.TopBarActions>
          <S.Button secondary>
            <ChevronDown size={16} />
            Save
          </S.Button>
          <S.Button secondary>
            <Share size={16} />
            Share
          </S.Button>
          <S.Button primary>
            <Download size={16} />
            Download
          </S.Button>
        </S.TopBarActions>
      </S.TopBar>

      <S.MainContent>
        <S.Sidebar>
          <S.SidebarHeader>
            <S.Button secondary fullWidth>
              <Plus size={16} />
              Add Page
            </S.Button>
          </S.SidebarHeader>
          <S.SidebarContent>
            <LayersList
              selectedLayer={selectedLayer}
              onSelectLayer={setSelectedLayer}
            />
          </S.SidebarContent>
        </S.Sidebar>

        <S.Canvas>
          <S.CanvasToolbar>
            {TABS.map((tab) => (
              <S.Tab
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={16} />
                {tab.label}
              </S.Tab>
            ))}
          </S.CanvasToolbar>

          <S.CanvasArea>
            <S.CanvasContent>
              <div
                style={{
                  width: "800px",
                  height: "600px",
                  background: "black",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Example content */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>
                    IT'S TIME{" "}
                  </h1>
                  <h2 style={{ fontSize: "48px", color: "#cd8f6a" }}>CrozAI</h2>
                </div>
              </div>
            </S.CanvasContent>

            <S.CanvasBottom>
              <S.TabBar>
                {BOTTOM_TABS.map((tab) => (
                  <S.Tab
                    key={tab.id}
                    active={activeBottomTab === tab.id}
                    onClick={() => setActiveBottomTab(tab.id)}
                  >
                    <tab.icon size={16} />
                    {tab.label}
                  </S.Tab>
                ))}
              </S.TabBar>
              <BottomPanel activeTab={activeBottomTab} />
              {/* <BottomTabsComponent />  */}
            </S.CanvasBottom>
          </S.CanvasArea>
        </S.Canvas>

        <S.RightPanel>
          <RightPanelContent activeTab={activeTab} />
        </S.RightPanel>
      </S.MainContent>
    </S.EditorLayout>
  );
}
