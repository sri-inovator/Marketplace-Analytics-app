import React, { useState, useEffect } from "react";
import { Constants } from "../constants";
import { ColumnChart, PieChart, LineChart } from "react-chartkick";
import "chartkick/chart.js"; // Import Chart.js for rendering
import "../css/util.css";
import itemsBoxArrow from "../assets/itemsBoxArrow.svg";
import styled from "@emotion/styled";
import {
  FwTab,
  FwModal,
  FwSelect,
  FwSelectOption,
} from "@freshworks/crayons/react";
import {
  ItemName1,
  ItemFrame1,
  ItemInfo1,
  ItemPrice2,
  ItemPrice1,
  ItemPrice3,
} from "../css/Style";
import {
  FwAvatar,
  FwButton,
  FwLabel,
  FwInput,
  FwCard,
} from "@freshworks/crayons/react";

const DetailsPage = ({ client, contact, chartType, selectedData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailData, setEmailData] = useState({
    from: "support@example.com",
    to: "",
    subject: "",
    content: `Hi Messi,

Are you ready to embark on your next unforgettable journey? At MakeMyTrip, we have everything you need to plan the perfect getaway, whether you're dreaming of a serene homestay, an exciting holiday package, or a seamless flight experience.

Explore Our Top Offers:

✈️ Flights: Find the best deals on flights to your favorite destinations. Whether it's a quick weekend escape or a long-haul adventure, we've got you covered. Book Now

🏡 Homestays: Experience the comfort of home wherever you go. Choose from a wide range of homestays that offer a unique and personalized stay. Explore Homestays

🌄 Holidays in India: Discover the beauty and diversity of India with our curated holiday packages. From the serene beaches of Goa to the majestic mountains of Himachal, find your perfect holiday. Plan Your Holiday

Don't miss out on these amazing opportunities to create lasting memories. Book now and let MakeMyTrip be your travel companion.

Safe travels,  
The MakeMyTrip Team`,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prev) => ({ ...prev, [name]: value }));
  };
  // const [modalContent, setModalContent] = useState("In this example, isModalOpen is a state variable that determines whether the modal is open or closed. The handleSelectChange function sets isModalOpen to true when an option is selected, which triggers the modal to open. The FwModal component has an open prop that controls its visibility based on the isModalOpen state. The onClose prop is used to update the state when the modal is closed.Make sure to install the @freshworks/crayons/react package to use these components in your React application."); // Editable content state

  const handleSelectChange = (event) => {
    const selectedValue = event.detail.value; // Get selected value
    setModalContent(
      selectedValue === "1"
        ? "WhatsApp Campaign Details"
        : "Email Campaign Details"
    ); // Set content dynamically
    setIsModalOpen(true); // Open modal on selection
  };

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
    return <ItemPriceText>Ticket Id - 121212</ItemPriceText>;
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
          <ChartContainer>
            {chartType === "bar" && (
              <ColumnChart data={formattedData} width="100%" />
            )}
            {chartType === "pie" && (
              <PieChart data={formattedData} width="100%" />
            )}
            {chartType === "line" && (
              <LineChart data={formattedData} width="100%" />
            )}
          </ChartContainer>
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
          <RectangleBox1>
            <IconsAppIconsChevronRight src={itemsBoxArrow} />
            <ItemInfo>
              <ItemFrame>
                <ItemName>Login Issues</ItemName>
                <ItemPrice>
                  <OrderInfo></OrderInfo>
                </ItemPrice>
              </ItemFrame>
            </ItemInfo>
          </RectangleBox1>
        </SubscriptionInfoDiv>
      </>
    );
  };

  return (
    <>
      <ShowSubscriptionItemInfo contact={contact} />
      <InsightsPage />
      <Campaigns>
        <Head2>AI Campaign Generation</Head2>
        <FwSelect
          id="campaign-select"
          label="Pick one campaign"
          placeholder="Your choices"
          hint-text="Select Single options"
          onFwChange={handleSelectChange} // ✅ Correct Event
        >
          <FwSelectOption value="1">WhatsApp</FwSelectOption>
          <FwSelectOption value="2">Email</FwSelectOption>
        </FwSelect>

        {/* <FwButton color="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </FwButton> */}

        <FwButton modalTriggerId="welcome-large"> Open Large Modal </FwButton>
        <FwModal id="welcome-large" titleText="Campaign" size="large" style={{ height: "80vh", maxHeight: "90vh" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px", height: "80%" }}
          >
            {/* From */}
            <label>From:</label>
            <input
              type="text"
              name="from"
              value={emailData.from}
              onChange={handleInputChange}
              style={inputStyle}
            />

            {/* To */}
            <label>To:</label>
            <input
              type="text"
              name="to"
              value={emailData.to}
              onChange={handleInputChange}
              placeholder="Enter recipient email"
              style={inputStyle}
            />

            {/* Subject */}
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={emailData.subject}
              onChange={handleInputChange}
              style={inputStyle}
            />

            {/* Content (Rich Text Editor) */}
            <label>Content:</label>
            <textarea
              name="content"
              value={emailData.content}
              onChange={handleInputChange}
              rows="30"
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "14px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                whiteSpace: "pre-wrap", // ✅ PRESERVE FORMATTING
              }}
            ></textarea>
          </div>
        </FwModal>
        {/* <FwModal
          id="campaign-modal"
          size="small"
          title-text="Campaign Details"
          open={isModalOpen}
          onFwClose={() => setIsModalOpen(false)} // Close modal
        >

          <textarea
            value={modalContent}
            onChange={(e) => setModalContent(e.target.value)}
            rows="5"
            style={{
              width: "100%",
              padding: "8px",
              fontSize: "14px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          ></textarea>


          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <FwButton
              color="primary"
              onClick={() => console.log("Saved:", modalContent)}
            >
              Save
            </FwButton>
            <FwButton onClick={() => setIsModalOpen(false)}>Close</FwButton>
          </div>
        </FwModal> */}
      </Campaigns>
    </>
  );
};

const Campaigns = styled.div``;

const inputStyle = {
  width: "100%",
  padding: "8px",
  fontSize: "14px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const textAreaStyle = {
  ...inputStyle,
  height: "120px",
};

const Head2 = styled.h4`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: clamp(
    1rem,
    2vw,
    1.5rem
  ); /* Dynamically adjusts size based on screen width */
  white-space: nowrap; /* Prevents wrapping in small spaces */
`;

const RectangleBox = styled.div`
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 1px rgb(235, 239, 243);
  border-radius: 12px;
  width: 100%;
  min-height: 120px; /* Ensures consistent height */
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content is evenly spaced */
  transition: background 0.3s ease;
  margin-left: 0px;

  &:hover {
    background: #f5f7f9;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Makes it responsive */
  }
`;

const RectangleBox1 = styled.div`
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 1px rgb(235, 239, 243);
  border-radius: 12px;
  width: 98%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center; /* Ensures content is evenly spaced */
  min-width: 80%; /* Prevents it from getting too small */
  padding: 12px;
  transition: background 0.3s ease;

  @media (min-width: 768px) {
    max-width: 300px; /* Keeps it stable on larger screens */
  }
`;

const ChartContainer = styled.span`
  width: 100%; /* Full width of parent */
  max-width: 700px; /* Adjust based on your layout */
  height: auto;
  display: flex;
  justify-content: center; /* Centers the chart */
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
  flex-direction: row;
  align-items: center;
`;

const Head = styled.h4`
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: clamp(
    1rem,
    2vw,
    1.5rem
  ); /* Dynamically adjusts size based on screen width */
  white-space: nowrap; /* Prevents wrapping in small spaces */
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
  justify-content: flex-start;
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
  transform: translateY(-50%);
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const RootContainer = styled.div`
  margin-top: 20px;
`;

export default DetailsPage;
