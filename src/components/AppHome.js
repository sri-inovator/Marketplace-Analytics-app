import { FwPopover, FwButton, FwListOptions } from "@freshworks/crayons/react";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import AnalyticsDashboard from "./ChartComponent";
import styled from "@emotion/styled";
import itemsBoxArrow from "../assets/itemsBoxArrow.svg";
import openModal from "../utils/showModal";


const TopicsFreq = [
  { groupName: "Billing", groupId: "2", count: 3 },
  { groupName: "Login", groupId: "4", count: 5 },
];

const AppHome = ({ client, isFreshchat }) => {
  const [chartType, setChartType] = useState("bar");
  const [selectedData, setSelectedData] = useState([]);
  const [contactEmail, setContactEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactId, setContactId] = useState("");
  const [ticketsFreq, setTicketsFreq] = useState([]); // State for dynamic ticket data
  const [convFreq, setConvFreq] = useState([]); // State for dynamic ticket data
  const [url, setUrl] = useState(""); // State for dynamic ticket data
  const [emailNotFound, setEmailNotFound] = useState(false);
  const [contact, setContact] = useState();
  const [issues, setIssues] = useState({}); // Store all issues
  const [firstIssue, setFirstIssue] = useState({ id: "", text: "" });
  const chatRef = useRef(null);
  const ticketRef = useRef(null);
  const topicRef = useRef(null);
  const chatPopRef = useRef(null);
  const ticketPopRef = useRef(null);
  const topicPopRef = useRef(null);
  const [chartData, setChartData] = useState([]);
  const [typeFrom, setTypeFrom] = useState()

  const iconDataSource = [
    { id: "bar", name: "BarChart" },
    { id: "pie", name: "PieChart" },
    { id: "line", name: "LineChart" },
  ];

  const topicData = [
    { id: "pie", name: "PieChart" }
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
            setMobile(data?.contact?.mobile);
            setContactId(data?.contact?.id);
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
    const fetchTicketsData = async () => {
      if (!contactId) return;  
      try {
        let response;
        console.log("paapaa"+ contactId);
        response = await client?.request?.invokeTemplate(
          "getTicketsDetails",
          {
            context: {
              userId: contactId,
              product: "freshdesk"
            },
          }
        );
      
        
        const data = JSON.parse(response.response);

        const formattedData = data.conv_data_graph_list.map((item) => ({
          month: new Date(2025, item.month - 1).toLocaleString("en-US", { month: "short" }),
          year: item.year.toString(),
          count: item.count,
        }));

        // Extract issue data
        const issueDataMap = data.issue_data_list.issue_data_map || {}; // Store all issues
        console.log("lloooo" +JSON.stringify(issueDataMap));
        const firstIssueKey = Object.keys(issueDataMap)[0]; // Get first issue ID
        const firstIssueValue = issueDataMap[firstIssueKey]; // Get first issue description

        const url = data.issue_data_list.url;

        console.log(formattedData);
        console.log(response);
  
        if (!response.status === 200) throw new Error("Failed to fetch ticket data");
          
        // Assuming API returns an array of { month, year, count }
        console.log(formattedData);
        setTicketsFreq(formattedData);
        setIssues(issueDataMap); // Store all issues in state
        setFirstIssue({ id: firstIssueKey, text: firstIssueValue });
        setUrl(url);
      } catch (error) {
        console.error("Error fetching ticket details:", error);
      }
    };
    
  
    fetchTicketsData();
  }, [contactId, contactEmail, mobile]);

  useEffect(() => {
    const fetchConvData = async () => {
      if (!contactId) return;  
      try {
        let response;
        console.log("paapaa"+ contactId);
        response = await client?.request?.invokeTemplate(
          "getConvData",
          {
            context: {
              userId: contactId,
              product: "freshchat"
            },
          }
        );
      
        
        const data = JSON.parse(response.response);

        const formattedData = data.conv_data_graph_list.map((item) => ({
          month: new Date(2025, item.month - 1).toLocaleString("en-US", { month: "short" }),
          year: Math.floor(item.year).toString(),
          count: item.count,
        }));

        // Extract issue data
        const issueDataMap = data.issue_data_list.issue_data_map || {}; // Store all issues
        console.log("lloooo" +JSON.stringify(issueDataMap));
        const firstIssueKey = Object.keys(issueDataMap)[0]; // Get first issue ID
        const firstIssueValue = issueDataMap[firstIssueKey]; // Get first issue description

        const url = data.issue_data_list.url;

        console.log(formattedData);
        console.log(response);
  
        if (!response.status === 200) throw new Error("Failed to fetch ticket data");
          
        // Assuming API returns an array of { month, year, count }
        console.log(formattedData);
        setConvFreq(formattedData);
        setIssues(issueDataMap); // Store all issues in state
        setFirstIssue({ id: firstIssueKey, text: firstIssueValue });
        setUrl(url);
      } catch (error) {
        console.error("Error fetching ticket details:", error);
      }
    };

    fetchConvData();
}, [contactId, contactEmail, mobile]);

useEffect(() => {
    
  const fetchConvGroupCount = async () => {
    console.log("inside fetchConvGroupCount");
    console.log(contactId)
    if (!contactId) return;

    try {
      let response;
      response = await client?.request?.invokeTemplate(
        "getConvGroupCount",
        {
          context: {
            userId: contactId,
            product: "freshchat"
          },
        }
      );
      const data = JSON.parse(response.response);
      console.log(data);
      const formatted = data.map((item) => ({
        name: item.groupName,
        count: item.count
      }));
      setChartData(formatted);
      // console.log("hiii");
      
    } catch (error) {
      console.error("Error fetching ticket details:", error);
    }
  };

  fetchConvGroupCount();
}, [contactId]);

useEffect(() => {
    
  const fetchTicketGroupCount = async () => {
    console.log("inside fetchTicketGroupCount");
    console.log(contactId);
    if (!contactEmail) return;

    try {
      let response;
      setChartData(TopicsFreq);
      response = await client?.request?.invokeTemplate(
        "getConvGroupCount",
        {
          context: {
            userId: contactId,
            product: "freshdesk"
          },
        }
      );
      const data = JSON.parse(response);
      const formatted = data.map((item) => ({
        name: item.groupName,
        count: item.count
      }));
      console.log("data: " + data);
    } catch (error) {
      console.error("Error fetching ticket details:", error);
    }
  };

  fetchTicketGroupCount();
}, [contactId]);

  useEffect(() => {
    if (chatRef.current) chatRef.current.options = iconDataSource;
    if (ticketRef.current) ticketRef.current.options = iconDataSource;
    if (topicRef.current) topicRef.current.options = topicData;
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

  const handleChartSelection = (type, data, typeFrom) => {
    console.log("kkaaa   "+data);
    console.log(data);
    setChartType(type);
    setSelectedData(data);
    setTypeFrom(typeFrom);
  };

  const handleMouseLeave = (popoverRef) => {
    popoverRef?.current?.hide();
  };

  return (
    <div className="p-6 flex flex-col items-center space-y-4">
      <Head>Insights dashboard</Head>
      <ButtonDiv>
          <FwPopover ref={chatPopRef} same-width="false">
        {isFreshchat && (
          <FwButton slot="popover-trigger">Chat</FwButton>
        )}
        <FwListOptions
          onMouseLeave={() => handleMouseLeave(chatPopRef)}
          ref={chatRef}
          slot="popover-content"
          option-label-path="name"
          option-value-path="id"
          onFwChange={(e) => handleChartSelection(e.detail.value, convFreq, "chat")}
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
              handleChartSelection(e.detail.value, ticketsFreq, "ticket")
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
            onFwChange={(e) => handleChartSelection(e.detail.value, chartData, "topic")}
          ></FwListOptions>
        </FwPopover>
      </ButtonDiv>

      {/* Pass selected chart type and data to the dashboard */}
      <AnalyticsDashboard chartType={chartType} data={selectedData} typeFrom={typeFrom} />

      <Head1>Top Issues</Head1>

      <SubscriptionInfoDiv>
        <RectangleBox onClick={() => {
          const newUrl = url.includes("conversation") ? `${url}/${firstIssue.id}` : `${url}/a/tickets/${firstIssue.id}`;
          window.open(newUrl, "_blank");
        }}>
          <ItemInfo>
            <ItemFrame>
              <ItemName>{firstIssue.text || "No issue available"}</ItemName>
              <ItemPrice>
                <ItemPriceText>
                  {url.includes("conversation") ? 
                    `Conversation Id - ${firstIssue.id || "N/A"}` : 
                    `Ticket Id - ${firstIssue.id || "N/A"}`}
                </ItemPriceText>
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
