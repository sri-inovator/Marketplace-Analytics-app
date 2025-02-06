import React, { useState, useEffect } from "react";
import { Constants } from "../constants";
import { ColumnChart, PieChart, LineChart } from "react-chartkick";
import "chartkick/chart.js"; // Import Chart.js for rendering
import "../css/util.css";
import itemsBoxArrow from "../assets/itemsBoxArrow.svg";
import styled from "@emotion/styled";
import { FwTab, FwKebabMenu } from "@freshworks/crayons/react";
import {
  // IconsAppIconsChevronRight,
  ItemPrice,
  ItemFrame,
  ItemInfo,
  // RectangleBox2,
  // SubscriptionInfoDiv,
  // SubscriptionInfoDiv1,
  // RectangleBox1,
  ItemName1,
  ItemFrame1,
  ItemInfo1,
  ItemPrice2,
  ItemPrice1,
  ItemPrice3,
  ItemPriceText,
} from "../css/Style";
import {
  FwAvatar,
  FwButton,
  FwLabel,
  FwInput,
  FwCard,
} from "@freshworks/crayons/react";

const DetailsPage = ({ client, contact, chartType, selectedData }) => {
  function ShowSubscriptionItemInfo({ contact }) {
    return (
      <SubscriptionInfoDiv>
        <RectangleBox className="hoverable-rectangle-box">
          <FwAvatar
            id="avatar"
            size="xlarge"
            image={contact.contact.avatar}
            fallback-text={contact.contact.first_name[0]}
          />
          <ItemInfo1>
            <ItemFrame1>
              <ItemName1>{contact.contact.first_name}</ItemName1>
              <ItemPrice1>
                <ItemPriceText>{contact.contact.email}</ItemPriceText>
              </ItemPrice1>
              <ItemPrice2>
                <ItemPriceText>{contact.contact.phone}</ItemPriceText>
              </ItemPrice2>
            </ItemFrame1>
          </ItemInfo1>
          <ItemPrice3>
            {/* <ItemPriceText>
          Support agents can now view all Subscriptions of a particular Customer directly from the Freshchat Inbox. 
          This visibility extends to viewing Subscriptions grouped by their Status, providing a clear overview of Active, Paused,
          Canceled, and Expired Subscriptions. This immediate access to Subscription details allows Agents to offer personalized support swiftly.
          </ItemPriceText> */}
          </ItemPrice3>
        </RectangleBox>
      </SubscriptionInfoDiv>
    );
  }

  const OrderInfo = ({ item }) => {
    return (
      <ItemPriceText>
        Ticket Id - 121212
      </ItemPriceText>
    );
  };

  const InsightsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDatas, setSelectedData] = useState(selectedData);
    const groups = ["Billing", "Revenue", "tech", "support"];

    const apiFetchFunction = async (page) => {
      const mockData = [
        [
          { month: "Jan", year: "2025", count: 92 },
          { month: "Feb", year: "2025", count: 23 },
          { month: "Mar", year: "2025", count: 92 },
          { month: "Apr", year: "2025", count: 23 },
          { month: "May", year: "2025", count: 75 },
          { month: "Jun", year: "2025", count: 92 },
        ],
        [
          { month: "Jul", year: "2025", count: 65 },
          { month: "Aug", year: "2025", count: 34 },
          { month: "Sep", year: "2025", count: 48 },
          { month: "Oct", year: "2025", count: 29 },
          { month: "Nov", year: "2025", count: 57 },
          { month: "Dec", year: "2025", count: 81 },
        ],
      ];
      return mockData[page - 1] || [];
    };

    const formattedData = selectedDatas.map((entry) => [
      `${entry.month} ${entry.year}`,
      entry.count,
    ]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await apiFetchFunction(currentPage);
        setSelectedData(data);
      };

      fetchData();
    }, [currentPage]);

    return (
      <>
        <RootContainer>
          <Head>Insights</Head>
          {/* Chart Container */}
          <div className="w-full max-w-4xl h-[400px] bg-gray-100 rounded-xl p-4 shadow-lg flex justify-center items-center">
            {chartType === "bar" && (
              <ColumnChart data={formattedData} width="550px" />
            )}
            {chartType === "pie" && (
              <PieChart data={formattedData} width="600px" />
            )}
            {chartType === "line" && (
              <LineChart data={formattedData} width="600px" />
            )}
          </div>
        </RootContainer>
        <ButtonDiv>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md disabled:opacity-50"
            disabled={currentPage === 1}
          >
            ◀ Prev
          </button>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="bg-gray-700 text-white px-4 py-2 rounded-md shadow-md"
            disabled={currentPage >= 2} // Only two pages in mock data
          >
            Next ▶
          </button>
        </ButtonDiv>

        <RootContainer1>
          {groups && groups.length > 0 ? (
            <RootWrapperTab>
              {groups.map((tab, index) => (
                <FwTab
                  key={index}
                  active={true}
                  onClick={() => console.log("akjdfajkhf")}
                >
                  {tab}
                </FwTab>
              ))}
            </RootWrapperTab>
          ) : null}
        </RootContainer1>

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
      </>
    );
  };

  return (
    <>
      <ShowSubscriptionItemInfo contact={contact} />
      <InsightsPage />
      {/* <SubscriptionInfoDiv>
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
      </SubscriptionInfoDiv> */}
    </>
  );
};

const RectangleBox = styled.div`
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 1px rgb(235, 239, 243);
  border-radius: 12px;
  width: 100%;
  min-height: 150px; /* Ensures consistent height */
  max-width: 300px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content is evenly spaced */
  transition: background 0.3s ease;

  &:hover {
    background: #f5f7f9;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Makes it responsive */
  }
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

const SubscriptionInfoDiv = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const RootContainer1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center; /* Centers the tabs */
  align-items: center;
  position: relative;
  padding: 20px 0;
`;

const ViewAll = styled.div`
  width: 100%;
  color: var(--A800, #2c5cc5);
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  text-align: center;
  margin-top: auto; /* Pushes it to the bottom */
  margin-bottom: 20px;
`;

const RootWrapperTab = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Allows it to adjust based on content */
  gap: 10px;
  width: 100%;
  background: rgb(255, 255, 255);
  padding: 10px;
  box-shadow: 0px 1px 0px rgb(235, 239, 243);
  border-radius: 8px;
`;

const IconsAppIconsChevronRight = styled.img`
  width: 14px;
  height: 14px;
  object-fit: cover;
  position: absolute;
  top: 50%;
  right: 8%;
  transform: translateY(-50%);
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;


const RootContainer = styled.div`
`;

export default DetailsPage;
