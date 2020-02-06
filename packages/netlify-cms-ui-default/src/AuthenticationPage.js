import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Icon from './Icon';
import { buttons, shadows, lengths, colors } from './styles';
import GoBackButton from './GoBackButton';

const StyledAuthenticationPage = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${colors.backgroundDark};
  position: relative;
  &:after {
    content: '';
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${colors.background};
    z-index: 0;
  }
`;

const AuthenticationPageModal = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  min-width: calc(${lengths.magicNumber} * 5);
  background: ${colors.foreground};
  box-shadow: ${shadows.drop};
  border-radius: ${lengths.borderRadiusCard};
  padding: ${lengths.magicNumber};
`;

const PageModalLogoWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: calc(${lengths.magicNumber} * 6);
`;

const PageModalButtonsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-top: calc(${lengths.magicNumber} * 1.5);
`;

const CustomIconWrapper = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
  width: calc(100% - ${lengths.magicNumber});
  margin: 0 auto;
`;

const NetlifyLogoIcon = styled(Icon)`
  display: flex;
  align-items: center;
  height: 100%;
  width: calc(100% - ${lengths.magicNumber});
  margin: 0 auto;
  color: #c4c6d2;
`;

const NetlifyCreditIcon = styled(Icon)`
  color: #c4c6d2;
  position: absolute;
  bottom: calc(${lengths.magicNumber} / 2);
`;

const CustomLogoIcon = ({ url }) => {
  return (
    <CustomIconWrapper>
      <img src={url} alt="Logo" />
    </CustomIconWrapper>
  );
};

const renderPageLogo = logoUrl => {
  if (logoUrl) {
    return <CustomLogoIcon url={logoUrl} />;
  }
  return <NetlifyLogoIcon type="netlify-cms" />;
};

export const LoginButton = styled.button`
  ${buttons.button};
  ${shadows.dropDeep};
  ${buttons.default};
  ${buttons.gray};

  &[disabled] {
    ${buttons.disabled};
  }

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${Icon} {
    margin-right: 18px;
  }
`;

const AuthenticationPage = ({
  onLogin,
  loginDisabled,
  loginErrorMessage,
  renderButtonContent,
  renderPageContent,
  logoUrl,
  siteUrl,
  backendTest,
  backendTestProgress,
  backendTestLogin,
}) => {
  return (
    <StyledAuthenticationPage>
      <AuthenticationPageModal>
        <PageModalLogoWrapper>{renderPageLogo(logoUrl)}</PageModalLogoWrapper>
        <PageModalButtonsWrapper>
          {backendTest ? (
            <LoginButton disabled={backendTestProgress} onClick={backendTestLogin}>
              {backendTestProgress ? 'Logging in...' : 'Login'}
            </LoginButton>
          ) : (
            <>
              {loginErrorMessage ? <p>{loginErrorMessage}</p> : null}
              {!renderPageContent ? null : renderPageContent({ LoginButton })}
              {!renderButtonContent ? null : (
                <LoginButton disabled={loginDisabled} onClick={onLogin}>
                  {renderButtonContent()}
                </LoginButton>
              )}

              {siteUrl && <GoBackButton href={siteUrl} />}
              {logoUrl ? <NetlifyCreditIcon size="100px" type="netlify-cms" /> : null}
            </>
          )}
        </PageModalButtonsWrapper>
      </AuthenticationPageModal>
    </StyledAuthenticationPage>
  );
};

AuthenticationPage.propTypes = {
  onLogin: PropTypes.func,
  logoUrl: PropTypes.string,
  siteUrl: PropTypes.string,
  loginDisabled: PropTypes.bool,
  loginErrorMessage: PropTypes.node,
  renderButtonContent: PropTypes.func,
  renderPageContent: PropTypes.func,
  backendTest: PropTypes.bool,
  backendTestProgress: PropTypes.bool,
  backendTestLogin: PropTypes.func,
};

export default AuthenticationPage;
