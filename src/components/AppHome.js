import { FwPopover, FwButton, FwListOptions } from "@freshworks/crayons/react";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import AnalyticsDashboard from "./ChartComponent";
import styled from "@emotion/styled";
import itemsBoxArrow from "../assets/itemsBoxArrow.svg";
import openModal from "../utils/showModal";

const ChatFreq = [
  { month: "Dec", year: "2024", count: 23 },
  { month: "Jan", year: "2025", count: 92 },
  { month: "Feb", year: "2025", count: 23 },
  { month: "Mar", year: "2025", count: 92 },
  { month: "Apr", year: "2025", count: 23 },
  { month: "Jun", year: "2025", count: 92 }
];

const TicketsFreq = [
  { month: "Feb", year: "2024", count: 45 },
  { month: "Nov", year: "2023", count: 78 },
];

const TopicsFreq = [
  { month: "Mar", year: "2024", count: 67 },
  { month: "Oct", year: "2023", count: 81 },
];

const AppHome = ({ client }) => {
  const [chartType, setChartType] = useState("bar");
  const [selectedData, setSelectedData] = useState(ChatFreq);
  const [contactEmail, setContactEmail] = useState("");
  const [emailNotFound, setEmailNotFound] = useState(false);
  const [contact, setContact] = useState();
  const chatRef = useRef(null);
  const ticketRef = useRef(null);
  const topicRef = useRef(null);
  const chatPopRef = useRef(null);
  const ticketPopRef = useRef(null);
  const topicPopRef = useRef(null);

  const iconDataSource = [
    { id: "bar", name: "BarChart" },
    { id: "pie", name: "PieChart" },
    { id: "line", name: "LineChart" },
  ];

  useLayoutEffect(() => {
    if (client) {
      const fetchData = async () => {
        try {
          const data = await client?.data?.get("contact");
          console.log(data);
          setContact(data);
          if (data?.contact?.email) {
            setContactEmail(data?.contact?.email);
          } else {
            setEmailNotFound(true);
          }
        } catch (error) {
          console.error("Email Not Found", error);
          setEmailNotFound(true);
        }
      };

      fetchData();

    }

  }, [client]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.options = iconDataSource;
    if (ticketRef.current) ticketRef.current.options = iconDataSource;
    if (topicRef.current) topicRef.current.options = iconDataSource;
  }, []);

  const OrderInfo = ({ item }) => {
    return (
      <ItemPriceText>
        Ticket Id - 121212
      </ItemPriceText>
    );
  };

  const handleViewMoreClick = () => {
    console.log(selectedData);
    openModal(client, "showModal", "Insights", "index.html", {
      modalID: "viewMoreModal",
      contact,
      chartType,
      selectedData
    });
  };

  const handleChartSelection = (type, data) => {
    setChartType(type);
    setSelectedData(data);
  };

  const handleMouseLeave = (popoverRef) => {
    popoverRef?.current?.hide();
  };

  return (
    <div className="p-6 flex flex-col items-center space-y-4">
      <Head>Insights dashboard</Head>
      <ButtonDiv>
        <FwPopover ref={chatPopRef} same-width="false">
          <FwButton slot="popover-trigger">Chat</FwButton>
          <FwListOptions
            onMouseLeave={() => handleMouseLeave(chatPopRef)}
            ref={chatRef}
            slot="popover-content"
            option-label-path="name"
            option-value-path="id"
            onFwChange={(e) => handleChartSelection(e.detail.value, ChatFreq)}
          ></FwListOptions>
        </FwPopover>
        <FwPopover ref={ticketPopRef} same-width="false">
          <FwButton slot="popover-trigger">Tickets</FwButton>
          <FwListOptions
            onMouseLeave={() => handleMouseLeave(ticketPopRef)}
            ref={ticketRef}
            slot="popover-content"
            option-label-path="name"
            option-value-path="id"
            onFwChange={(e) =>
              handleChartSelection(e.detail.value, TicketsFreq)
            }
          ></FwListOptions>
        </FwPopover>
        <FwPopover ref={topicPopRef} same-width="false">
          <FwButton slot="popover-trigger">Topics</FwButton>
          <FwListOptions
            onMouseLeave={() => handleMouseLeave(topicPopRef)}
            ref={topicRef}
            slot="popover-content"
            option-label-path="name"
            option-value-path="id"
            onFwChange={(e) => handleChartSelection(e.detail.value, TopicsFreq)}
          ></FwListOptions>
        </FwPopover>
      </ButtonDiv>

      {/* Pass selected chart type and data to the dashboard */}
      <AnalyticsDashboard chartType={chartType} data={selectedData} />

      <Head1>Top Issues</Head1>

      <SubscriptionInfoDiv>
        <RectangleBox>
          <IconsAppIconsChevronRight src={itemsBoxArrow} />
          <ItemInfo>
            <ItemFrame>
              <ItemName>Login Issues</ItemName>
              <ItemPrice>
                <OrderInfo></OrderInfo>
              </ItemPrice>
            </ItemFrame>
          </ItemInfo>
        </RectangleBox>
      </SubscriptionInfoDiv>

      <ViewAll onClick={() => handleViewMoreClick()}>View more info</ViewAll>
    </div>
  );
};

const ViewAll = styled.div`
  width: 100%;
  color: var(--A800, #2c5cc5);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 133.333% */
  cursor: pointer;
  text-align: center; /* Ensures it's centered */
  margin-top: 12px; /* Pushes it to the bottom */
`;


const Head = styled.h4`
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: clamp(1rem, 2vw, 1.5rem); /* Dynamically adjusts size based on screen width */
  white-space: nowrap; /* Prevents wrapping in small spaces */
`;

const Head1 = styled.h3`
  margin-top: 20px;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemName = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  display: block;
  width: 100%;
`;

const IconsAppIconsChevronRight = styled.img`
  width: 14px;
  height: 14px;
  object-fit: cover;
  position: absolute;
  top: 88%;
  right: 8%;
  transform: translateY(-50%);
`;

const ItemPrice = styled.div`
  width: 100%;
  position: relative;
`;

const ItemPriceText = styled.span`
  color: #12344d;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.07px;
  text-align: left;
  display: block;
  width: 100%;
`;

const ItemFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 8px;
  width: 100%;
`;

const ItemInfo = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
`;

const RectangleBox = styled.div`
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 1px rgb(235, 239, 243);
  border-radius: 12px;
  width: 98%;
  
  min-width: 80%; /* Prevents it from getting too small */
  padding: 12px;
  transition: background 0.3s ease;

  &:hover {
    background: #f5f7f9;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 300px; /* Keeps it stable on larger screens */
  }
`;

const SubscriptionInfoDiv = styled.div`
  width: 100%;
  max-width: 90%;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;


export default AppHome;
