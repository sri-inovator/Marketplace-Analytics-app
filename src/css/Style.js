import styled from "@emotion/styled";

export const RootContainer = styled.div`
  position: relative;
`;

export const Footer = styled.div`
  display: flex;
  width: 600px;
  padding: 12px 16px 12px 12px;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 12px;
  border-radius: 0px 0px 4px 4px;
  background: #f5f7f9;
  position: absolute;
`;

export const Columns = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  border-bottom: 1px solid lightgray;
  padding: 0px 12px;
  position: absolute;
  left: 0px;
  top: 4px;
  width: 640px;
  height: 39px;
`;

export const Tab = styled.span`
  color: rgb(71, 88, 103);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  width: 540px;
  height: 708px;
  position: absolute;
  left: 16px;
  top: 71px;
`;

export const SubscriptionInfo1 = styled.div`
  width: 100%;
  height: ${(props) => (props.showStatus ? "64px" : "50px")};
  left: 0px;
  top: 0px;
  position: relative;
`;

export const SubscriptionItem = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  position: absolute;
  left: 12px;
  top: 8px;
  &:hover {
    color: #2c5cc5;
    cursor: pointer;
  }
`;

export const Price = styled.span`
  color: rgb(71, 88, 103);
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  width: 208px;
  position: absolute;
  left: 12px;
  top: 36px;
`;

export const Status = styled.span`
  color: rgb(44, 92, 197);
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 16px;
  text-align: left;
  position: relative;
  padding-right: 10px;
  left: 12px;
  top: 56px;
  &:hover {
    cursor: pointer;
  }
`;

export const Status1 = styled.span`
  color: rgb(44, 92, 197);
  text-overflow: ellipsis;
  font-size: 13px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 16px;
  text-align: right;
  position: relative;
  left: 80px;
  top: 52px;
  &:hover {
    cursor: pointer;
  }
`;

export const MessageWrapper = styled.span`
  color: rgb(18, 52, 77);
  font-size: 15px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: initial;
  line-height: 20px;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  padding-top: 25px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ModelNotNowButton = styled.button`
  gap: 10px;
  border: solid 1px #cfd7df;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(180deg, #f5f7f9 0%, #ebf0f4 100%);
  }
  background: var(
    --secondary-fill,
    linear-gradient(180deg, #fff 0%, #f5f7f9 100%)
  );
`;

export const ModelNotNowButtonText = styled.span`
  color: #12344d;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const ModelCancelSubscription = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border: solid 1px rgb(18, 52, 77);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 6px 12px;
  cursor: pointer;
  background: linear-gradient(-180deg, rgb(38, 73, 102), rgb(18, 52, 77));
  &:hover {
    background: linear-gradient(-180deg, rgb(26, 61, 85), rgb(8, 37, 52));
  }
`;

export const CancelSubscriptionButtonText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const RootWrapperSlider = styled.div`
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: relative;
`;

export const ItemInfoDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  box-sizing: border-box;
  position: absolute;
  left: 8px;
  top: 92px;
`;

export const ProductInfoDiv = styled.div`
  width: 85px;
  height: 20px;
  position: relative;
`;

export const ProductInfo = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const SubscriptionDetails = styled.div`
  width: 160px;
  height: 280px;
  position: relative;
`;

export const DetailsInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  box-sizing: border-box;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const PriceDetails = styled.div`
  width: 41px;
  height: 40px;
  position: relative;
`;

export const DetailsTitle = styled.span`
  color: rgb(71, 88, 103);
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const DetailsContent = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 20px;
`;

export const QuantityDetails = styled.div`
  width: 120px;
  height: 40px;
  position: relative;
`;

export const SKUDetails = styled.div`
  width: 55px;
  height: 40px;
  position: relative;
`;

export const CurrentSubscriptionDiv = styled.div`
  width: 100%;
  height: 484px;
  position: relative;
`;

export const CopyLink = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	gap: 4px;
	box-sizing: border-box;
	position: absolute;
	left: 0px;
	top: 0px;
	cursor: pointer;
	&:hover {
    text-decoration: underline;
`;

export const SealView = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	gap: 4px;
	box-sizing: border-box;
	position: absolute;
	left: 8px;
	top: 4px;
	cursor: pointer;
`;

export const LinkView = styled.span`
  color: rgb(44, 92, 197);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const IconsAppIconsOpenNewTab = styled.img`
  width: 12px;
  height: 12px;
  object-fit: cover;
`;

export const CurrentSubscriptionInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  box-sizing: border-box;
  position: absolute;
  padding-bottom: 100px;
  left: 8px;
  top: 92px;
  width: 620px;
`;

export const SubscriptionFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 20px;
  box-sizing: border-box;
`;

export const ItemFrame = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 8px;
  box-sizing: border-box;
`;

export const ItemFrame1 = styled.div`
  box-sizing: border-box;
`;

export const StatusBox = styled.span`
  color: rgb(71, 88, 103);
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
`;

export const ActiveTag = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border: solid 1px rgb(180, 229, 218);
  border-radius: 4px;
  background: rgb(224, 245, 241);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding: 5px 8px;
`;

export const BackIcon = styled.img`
  width: 12px;
  height: 12px;
  object-fit: cover;
`;

export const LinkAndBack = styled.div`
  height: 68px;
  position: fixed;
  top: 0px;
  width: 635px;
  background-color: white;
  padding: 0px 10px 14px 15px;
  z-index: 2;
`;

export const PausedTag = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border: solid 1px rgb(253, 219, 181);
  border-radius: 4px;
  background: rgb(254, 241, 225);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding: 5px 8px;
`;

export const BackButtonFrame = styled.div`
  width: 62px;
  height: 24px;
  position: absolute;
  left: 8px;
  top: 44px;
`;

export const BackButtonFrame1 = styled.div`
  width: 62px;
  height: 24px;
  position: absolute;
  left: 8px;
  top: 10px;
`;

export const BackButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  border-radius: 4px;
  background-color: #f5f7f9;
  box-sizing: border-box;
  padding: 5px 8px 5px 8px;
  position: absolute;
  left: 0px;
  top: 0px;
  width: 62px;
  height: 24px;
  transform: translateY(2px);
  transition: transform 0.3s;
  &:active {
    transform: translateY(3px);
  }
  &:hover {
    background-color: rgb(218, 222, 227);
  }	
`;

export const BackText = styled.span`
  color: #12344d;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  text-align: left;
  color: ${(props) => (props.isHovered ? "#2C5CC5" : "#12344D")};
`;

export const ExpiredTag = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border: solid 1px rgb(128, 128, 128);
  border-radius: 4px;
  background: rgb(128, 128, 128);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding: 5px 8px;
`;

export const CancelledTag = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border: solid 1px rgb(255, 208, 214);
  border-radius: 4px;
  background: rgb(255, 236, 240);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding: 5px 8px;
`;

export const TagText = styled.span`
  color: ${(props) => props.tagColor || "rgb(0, 121, 91)"};
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  text-align: left;
`;

export const InfoDiv = styled.div`
  width: 260px;
  height: 40px;
  position: relative;
`;

export const ItemCountDiv = styled.div`
  width: 69px;
  height: 24px;
  position: relative;
`;

export const InfoTitle = styled.span`
  color: rgb(71, 88, 103);
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const InfoContent = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 20px;
  width: 300px;
`;

export const CustomerPortalDiv = styled.div`
  width: 134px;
  height: 40px;
  position: relative;
`;

export const CustomerPortalLink = styled.div`
  width: 129px;
  height: 20px;
  position: absolute;
  left: 0px;
  top: 20px;
`;

export const IconsAppIconsCopy = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
`;

export const SubscriptionBox = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 16px;
  width: 520px;
  box-sizing: border-box;
  margin-top: 12px;
`;

export const SubscriptionBox1 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 32px;
  width: 520px;
  box-sizing: border-box;
  margin-top: 12px;
`;

export const ItemCount = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  width: 200px;
  font-size: 16px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const SubscriptionInfoDiv = styled.div`
  width: 630px;
  height: 68px;
  position: relative;
`;

export const SubscriptionInfoDiv1 = styled.div`
  width: 100%;
  height: 88px;
  position: relative;
  top: -16px;
`;

export const RectangleBox = styled.div`
  height: 68px;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 1px rgb(235, 239, 243);
  border-radius: 12px;
  position: absolute;
  left: 60px;
  right: 32px;
  top: 460px;
  &:hover {
    background: #f5f7f9;
    cursor: pointer;
  }
`;

export const RectangleBox2 = styled.div`
  height: 68px;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 1px rgb(235, 239, 243);
  border-radius: 12px;
  position: absolute;
  left: 60px;
  right: 32px;
  top: 520px;
`;

export const RectangleBox1 = styled.div`
  height: 109px;
  width: 648px;
  background: rgb(255, 255, 255);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border: solid 1px rgb(235, 239, 243);
  border-radius: 12px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 30px;
`;

export const RectangleBoxHover = styled.div`
  width: 630px;
  height: ${(props) => (props.showStatus ? "88px" : "64px")};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  position: absolute;
  left: -12px;
  top: -8px;
  &:hover {
    background: #f5f7f9;
    border-radius: 8px;
    cursor: auto;
  }
`;

export const IconsAppIconsChevronRight = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  position: absolute;
  top: 22px;
  right: 24px;
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  left: 8px;
  top: 22px;
  border-radius: 8px;
`;

export const ItemInfo = styled.div`
  width: 299px;
  height: 72px;
  position: absolute;
  left: 16px;
  top: 12px;
`;

export const ItemInfo1 = styled.div`
  width: 269px;
  height: 118px;
  position: absolute;
  left: 122px;
  top: 22px;
`;

export const ItemName = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const ItemName1 = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  width: 200px;
  font-size: 16px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-align: left;
`;

export const ItemPrice = styled.div`
  width: 196px;
  height: 16px;
  position: relative;
`;

export const ItemPrice1 = styled.div`
  width: 196px;
  height: 16px;
  position: relative;
  top: 0px;
`;

export const ItemPrice2 = styled.div`
  width: 196px;
  height: 16px;
  position: relative;
  top: 8px;
`;

export const ItemPrice3 = styled.div`
  width: 196px;
  height: 16px;
  position: relative;
  top: 16px;
`;

export const ItemPriceText = styled.span`
  color: #12344d;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.07px;
  text-align: left;
  width: 390px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const BottomFrame = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding-bottom: 0px;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 0px;
  width: 635px;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 0px 0px 4px 4px;
  background: #fff;
`;

export const BottomFrame1 = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-end;
  gap: 12px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding-bottom: 0px;
  padding-top: 12px;
  padding-left: 12px;
  padding-right: 0px;
  width: 658px;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 0px 0px 4px 4px;
  background: #fff;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border: solid 1px rgb(207, 215, 223);
  border-radius: 4px;
  background: linear-gradient(-180deg, white, rgb(245, 247, 249));
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: #f5f7f9;
  }
`;

export const ButtonText = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const Button_0001 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border: solid 1px rgb(18, 52, 77);
  border-radius: 4px;
  background: linear-gradient(-180deg, rgb(38, 73, 102), rgb(18, 52, 77));
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding: 6px 12px;
  cursor: pointer;
`;

export const ButtonText_0001 = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const Created_Date = styled.span`
color: #475867;
font-feature-settings: 'clig' off, 'liga' off;
font-size: 14px;
font-style: italic;
font-weight: 400;
line-height: 20px;
`;

export const ItemInfoDiv1 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  box-sizing: border-box;
  position: absolute;
  left: 8px;
  top: ${(props) => (props.top === true ? "4px" : "52px")};
  width: 90%;
`;

export const StatusButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex: none;
  gap: 10px;
  border: solid 1px rgb(18, 52, 77);
  border-radius: 4px;
  background: linear-gradient(-180deg, rgb(38, 73, 102), rgb(18, 52, 77));
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-sizing: border-box;
  padding: 6px 12px;
  cursor: pointer;
  &:hover {
    background: linear-gradient(-180deg, rgb(26, 61, 85), rgb(8, 37, 52));
  }
`;

export const StatusText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const PauseSubscriptionButtonText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const ReactivateSubscriptionText = styled.span`
  color: white;
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
`;

export const NoSubs = styled.img`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100px;
  height: 100px;
`;

export const SubsNotFound = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 152px;
  height: 128px;
  gap: 8px;
  top: 140px;
  left: 220px;
  position: absolute;
`;

export const SubsText = styled.span`
  text-align: center;
  font-family: "SF Pro Text", sans-serif;
  color: rgb(71, 88, 103);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.08px;
`;

export const CancelReason = styled.input`
  width: 14px;
  height: 14px;
`;
export const CancelReasons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CancelReasonSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;
`;

export const CancelReasonHeaderLabel = styled.div`
  height: 20px;
  font-family: "SF Pro Text", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  top: 88px;
  color: rgb(18, 52, 77);
`;

export const CancelReasonLabel = styled.label`
  height: 20px;
  font-family: "SF Pro Text", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: rgb(18, 52, 77);
  display: flex;
  gap: 5px;
`;

export const CancelReasonOptionGroup = styled.div`
  width: 544px;
  height: 132px;
  position: relative;
  left: 8px;
  top: 0px;
`;

export const CancelReasonOptionalLabel = styled.span`
  color: rgb(18, 52, 77);
  text-overflow: ellipsis;
  font-size: 14px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const Option = styled.span`
  color: #475867;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  position: absolute;
  left: 138px;
  top: 0px;
`;

export const CancelReasonOptionalMaxLenthLabel = styled.span`
  color: rgb(100, 122, 142);
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: "SF Pro Text", sans-serif;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  position: absolute;
  padding-top: 8px;
  left: 0px;
  top: 116px;
  transition: transform 0.3s ease-in-out;
  pointer-events: none;
`;
