import React from 'react';
import styled from '@emotion/styled';

const Loader = () => {
  return (
    <>
      <RootWrapper>
        <NameLoader />
        <RollLoader />
        <Tag></Tag>
        <BreakLine top='65px' />
        <BalanceLoader />
        <ReferalLinkLoader />
        <BreakLine top='145px' />
        <ReferalMainDiv>
          <RewardDiv />
        </ReferalMainDiv>
        <BottomDiv />
      </RootWrapper>
          <RootWrapper1>
          <NameLoader />
          <RollLoader />
          <Tag></Tag>
          <BreakLine top='65px' />
          <BalanceLoader />
          <ReferalLinkLoader />
          <BreakLine top='145px' />
          <ReferalMainDiv>
            <RewardDiv />
          </ReferalMainDiv>
          <BottomDiv />
          <ReferalMainDiv>
            <RewardDiv />
          </ReferalMainDiv>
          <BottomDiv />
        </RootWrapper1>
      </>
  );
};

const RootWrapper = styled.div`
  background-color: white;
  position: relative;
`;

const RootWrapper1 = styled.div`
  background-color: white;
  position: relative;
  top: 300px;
`;

const BalanceLoader = styled.div`
  width: 75px;
  height: 16px;
  background-color: rgb(235, 239, 243);
  border-radius: 4px;
  position: absolute;
  top: 84px;
`;

const NameLoader = styled.div`
  width: 153px;
  height: 20px;
  background-color: rgb(235, 239, 243);
  border-radius: 4px;
  position: absolute;
  top: 6px;
`;

const RollLoader = styled.div`
  width: 50px;
  height: 16px;
  background-color: rgb(245, 247, 249);
  border-radius: 4px;
  position: absolute;
  top: 32px;
`;

const BreakLine = styled.div`
  width: 272px;
  height: 0px;
  border-top: solid 1px rgb(235, 239, 243);
  position: absolute;
  top: ${(props) => props.top || '0px'};
`;

const ReferalLinkLoader = styled.div`
  width: 28px;
  height: 14px;
  background-color: rgb(245, 247, 249);
  border-radius: 4px;
  position: absolute;
  top: 109px;
`;

const BottomDiv = styled.div`
  width: 157px;
  height: 16px;
  background-color: rgb(235, 239, 243);
  border-radius: 4px;
  position: absolute;
  top: 200px;
`;

const RewardDiv = styled.div`
  width: 78px;
  height: 14px;
  background-color: rgb(245, 247, 249);
  border-radius: 4px;
  position: relative;
`;

const ReferalMainDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
  box-sizing: border-box;
  position: absolute;
  top: 165px;
  width: 78px;
  height: 14px;
`;

const Tag = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background-color: rgb(229, 242, 253);
  box-sizing: border-box;
  padding: 2px 8px;
  position: absolute;
  top: 6px;
  right: 24px;
  width: 65px;
  height: 24px;
`;

export default Loader;