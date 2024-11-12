"use client";
import React, { useState, useEffect } from "react";
import { LayersList } from "./LayersList";
import { RightPanelContent } from "./RightPanelContent";
import { BottomPanel } from "./BottomPanel";
import {
  ChevronDown,
  ChevronRight,
  User,
  Code,
  Upload,
  Activity,
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
} from "lucide-react";
import BottomTabsComponent from "./BottomTab";
import * as S from "./styles";

export default function Editor() {
  const [activeTab, setActiveTab] = useState("template");
  const [activeBottomTab, setActiveBottomTab] = useState("description");
  const [selectedLayer, setSelectedLayer] = useState(null);

  const TABS = [
    { id: "template", label: "Template", icon: Layout },
    { id: "avatar", label: "Avatar", icon: User },
    { id: "Text", label: "Text", icon: Type },
    { id: "MEDIA_ITEMS", label: "Media", icon: Image },

    { id: "uploads", label: "Uploads", icon: Upload },
    { id: "interactivity", label: "Interactivity", icon: Activity },
    { id: "Shapes", label: "Elements", icon: Shapes },
  ];

  const BOTTOM_TABS = [
    { id: "description", label: "Description", icon: Type },
    { id: "layers", label: "Layers", icon: LayersList },
    { id: "settings", label: "Settings", icon: Type },
  ];

  // Sample images for LayersList
  const slides = [
    { id: "slide1", name: "Slide 1", imageUrl: "/images/thumb.png" },
    { id: "slide2", name: "Slide 2", imageUrl: "/images/thumb.png" },
    { id: "slide3", name: "Slide 3", imageUrl: "/images/thumb.png" },
    { id: "slide4", name: "Slide 4", imageUrl: "/images/thumb.png" },
  ];

  // Set the default selected layer to the first image
  useEffect(() => {
    if (slides.length > 0) {
      setSelectedLayer(slides[0]);
    }
  }, []);

  return (
    <S.EditorLayout>
      <S.TopBar>
        <S.Logo>CrozAI Editor</S.Logo>
        <S.TopBarActions>
          {/* <S.Button secondary>
            <ChevronDown size={16} />
            Save
          </S.Button> */}
          <S.Button secondary>
            <Share size={16} />
            Preview
          </S.Button>
          <S.Button primary>
            <Download size={16} />
            Generate
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
              slides={slides} // Pass the slides data to LayersList
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
          <S.CanvasScrollWrapper>
            <S.CanvasArea>
              <S.CanvasContent>
                {selectedLayer ? (
                  <div
                    style={{
                      width: "800px",
                      height: "450px",
                      background: `url(${selectedLayer.imageUrl}) no-repeat center center`,
                      backgroundSize: "cover",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      position: "relative",
                      overflow: "hidden",
                      marginTop: "-20px",
                    }}
                  >
                    {/* Content can be added on top of the image, if needed */}
                  </div>
                ) : (
                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <p>Select a slide to view it here</p>
                  </div>
                )}
              </S.CanvasContent>

              <S.CanvasBottom>
                <BottomPanel activeTab={activeBottomTab} />
              </S.CanvasBottom>
            </S.CanvasArea>
          </S.CanvasScrollWrapper>
        </S.Canvas>

        <S.RightPanel>
          <RightPanelContent activeTab={activeTab} />
        </S.RightPanel>
      </S.MainContent>
    </S.EditorLayout>
  );
}
