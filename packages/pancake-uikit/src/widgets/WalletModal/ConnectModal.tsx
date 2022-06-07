import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Grid from "../../components/Box/Grid";
import Box from "../../components/Box/Box";
import getThemeValue from "../../util/getThemeValue";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";
import { Button } from "../../components/Button";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import WalletCard, { MoreWalletCard } from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  displayCount?: number;
  t: (key: string) => string;
}

const StyledModalHeader = styled(ModalHeader)`
  border-bottom: none;
`;

const WalletWrapper = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

const StyledBox = styled(Box)`
  justify-content: center;
  width: 260px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  margin: auto;
  padding: 10px 0px;
  margin-bottom: 80px;
`;

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  background: tranparent;
  color: #ffffff;
  width: 100%;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #352f44;
  border-radius: 6px;
  height: 40px;
  width: 100%;
`;

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, displayCount = 3, t }) => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const sortedConfig = getPreferredConfig(config);
  const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);

  return (
    <ModalContainer minWidth="336px">
      <StyledModalHeader>
        <ModalTitle>
          <Heading>{t("Connect Wallet")}</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </StyledModalHeader>
      <ModalBody width={["336px", null, "336px"]}>
        <WalletWrapper style={{ border: "none" }} py="24px" maxHeight="453px" overflowY="auto">
          <Grid gridTemplateColumns="1fr 1fr">
            {displayListConfig.map((wallet) => (
              <Box key={wallet.title}>
                <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
              </Box>
            ))}
            {!showMore && <MoreWalletCard t={t} onClick={() => setShowMore(true)} />}
          </Grid>
        </WalletWrapper>
        <StyledBox p="24px">
          <Text textAlign="center" color="text" as="p" mb="16px">
            {t("Haven’t got a crypto wallet yet?")}
          </Text>
          <StyledButtonContainer>
            <StyledButton
              style={{ width: "100%", backgroundColor: "tranparent" }}
              as="a"
              href="https://docs.pancakeswap.finance/get-started/connection-guide"
              {...getExternalLinkProps()}
            >
              {t("Learn How to Connect")}
            </StyledButton>
          </StyledButtonContainer>
        </StyledBox>
      </ModalBody>
    </ModalContainer>
  );
};

export default ConnectModal;
