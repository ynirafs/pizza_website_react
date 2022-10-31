import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialMediaLogo,
    SocialMediaIcon,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to='/'>Pomodoro Pizza</SocialMediaLogo>
                        <SocialMediaIcon>
                            <SocialIconLink
                                href='/'
                                target='_blank'
                                rel='noopener noreferer'
                                aria-label='Facebook'
                            >
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink
                                href='/'
                                target='_blank'
                                rel='noopener noreferer'
                                aria-label='Instagram'
                            >
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink
                                href='/'
                                target='_blank'
                                rel='noopener noreferer'
                                aria-label='Youtube'
                            >
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink
                                href='/'
                                target='_blank'
                                rel='noopener noreferer'
                                aria-label='Twitter'
                            >
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialMediaIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;