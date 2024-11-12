"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { FaFolder, FaPlayCircle } from "react-icons/fa";
import { BiChevronDown, BiChevronUp, BiVideo } from "react-icons/bi";
import { useRouter } from "next/navigation";

const apiDoc = {
  title: "Summary",
  description:
    "Visualize your API structure, select pages, and create custom video tutorials.",
  pages: [
    {
      id: "1",
      title: "Introduction",
      description:
        "A brief overview of the API structure, use cases, and introduction to core functionalities.",
      endpoints: 1,
      videoContent:
        "This video will cover the API overview, its purpose, and main components in a minute.",
      subPages: [],
    },
    {
      id: "2",
      title: "Authentication",
      description:
        "Learn about the various methods of authentication, including OAuth and API Key approaches.",
      endpoints: 4,
      videoContent:
        "The video will explain each authentication method, focusing on security and ease of use.",
      subPages: [
        {
          id: "2-1",
          title: "OAuth",
          description: "Details on OAuth for secure authentication.",
          endpoints: 2,
        },
        {
          id: "2-2",
          title: "API Key",
          description: "Steps to authenticate using API keys.",
          endpoints: 2,
        },
      ],
    },
    {
      id: "3",
      title: "User Management",
      description: "Endpoints for managing user accounts, profiles, and roles.",
      endpoints: 6,
      videoContent: "Covers account creation, deletion, and user roles.",
      subPages: [
        {
          id: "3-1",
          title: "Create User",
          description: "Endpoint for creating new users.",
          endpoints: 1,
        },
        {
          id: "3-2",
          title: "Delete User",
          description: "Remove users from the system.",
          endpoints: 1,
        },
        {
          id: "3-3",
          title: "Update Profile",
          description: "Edit user profile details.",
          endpoints: 2,
        },
      ],
    },
    {
      id: "4",
      title: "Data Retrieval",
      description:
        "Fetching various data types with advanced filtering options.",
      endpoints: 5,
      videoContent: "Shows how to retrieve data with customizable queries.",
      subPages: [
        {
          id: "4-1",
          title: "Get User Data",
          description: "Retrieve user-specific data.",
          endpoints: 2,
        },
        {
          id: "4-2",
          title: "Filter Records",
          description: "Advanced filtering on data sets.",
          endpoints: 3,
        },
      ],
    },
    // More pages as needed...
  ],
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  color: #e0e0e0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const Header = styled.h2`
  color: #7b3fe4;
  font-size: 2.4em;
  font-weight: bold;
  text-align: left;
  width: 90%;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #8f8f8f;
  text-align: left;
  width: 90%;
  margin-bottom: 25px;
`;

const GroupBox = styled.div`
  width: 90%;
  background-color: #181818;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const GroupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3em;
  color: #7b3fe4;
  cursor: pointer;
`;

const StatBox = styled.div`
  font-size: 0.9em;
  color: #bfbfbf;
  margin-top: 8px;
`;

const DescriptionBox = styled.p`
  color: #8f8f8f;
  margin-top: 10px;
  font-size: 0.9em;
  line-height: 1.5;
`;

const Button = styled.button`
  background-color: #7b3fe4;
  color: #e0e0e0;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  &:hover {
    background-color: #5a2bb1;
  }
`;

const GenerateButton = styled(Button)`
  background: linear-gradient(90deg, #7b3fe4, #5a2bb1);
  color: #e0e0e0;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  position: absolute; /* Position the button in the top-right corner */
  top: 50px;
  right: 50px;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background: linear-gradient(90deg, #5a2bb1, #7b3fe4);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

const ApiDocVisualizer = () => {
  const router = useRouter();
  const [expandedPages, setExpandedPages] = useState({});
  const [selectedPages, setSelectedPages] = useState([]);

  const toggleDropdown = (id) => {
    setExpandedPages((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelect = (page) => {
    const isSelected = selectedPages.includes(page.id);
    setSelectedPages(
      isSelected
        ? selectedPages.filter((p) => p !== page.id)
        : [...selectedPages, page.id],
    );
  };

  const generateVideos = () => {
    router.push("/preview");
  };

  return (
    <Container>
      <Header>{apiDoc.title}</Header>
      <Description>{apiDoc.description}</Description>

      <GenerateButton onClick={generateVideos}>Generate Videos</GenerateButton>

      {apiDoc.pages.map((page) => (
        <GroupBox key={page.id}>
          <GroupHeader onClick={() => toggleDropdown(page.id)}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaFolder style={{ marginRight: "10px" }} />
              {page.title}
            </div>
            {expandedPages[page.id] ? <BiChevronUp /> : <BiChevronDown />}
          </GroupHeader>

          <StatBox>Endpoints: {page.endpoints}</StatBox>

          {expandedPages[page.id] && (
            <div style={{ marginTop: "10px" }}>
              <DescriptionBox>{page.description}</DescriptionBox>
              <p style={{ color: "#8f8f8f", fontStyle: "italic" }}>
                {page.videoContent}
              </p>

              {page.subPages.length > 0 && (
                <div style={{ marginTop: "10px" }}>
                  {page.subPages.map((subPage) => (
                    <div
                      key={subPage.id}
                      style={{ marginBottom: "8px", paddingLeft: "15px" }}
                    >
                      <BiVideo
                        style={{ color: "#7b3fe4", marginRight: "5px" }}
                      />
                      <strong>{subPage.title}</strong> - {subPage.description}
                      <p style={{ fontSize: "0.85em", color: "#bfbfbf" }}>
                        Endpoints: {subPage.endpoints}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <Button onClick={() => handleSelect(page)}>
                {selectedPages.includes(page.id)
                  ? "Deselect"
                  : "Select for Video"}
              </Button>
            </div>
          )}
        </GroupBox>
      ))}
    </Container>
  );
};

export default ApiDocVisualizer;
