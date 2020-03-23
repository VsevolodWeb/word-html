import React from 'react';
import Switch from "react-switch";
import {
	EmailShareButton, EmailIcon,
	FacebookShareButton, FacebookIcon,
	LinkedinShareButton, LinkedinIcon,
	RedditShareButton, RedditIcon,
	TelegramShareButton, TelegramIcon,
	TwitterShareButton, TwitterIcon,
	ViberShareButton, ViberIcon,
	WhatsappShareButton, WhatsappIcon,
	VKShareButton, VKIcon,
} from "react-share";
import {ThemesList} from "../../redux/app-reducer";
import {PropsType} from "./HeaderContainer";
import s from "./Header.module.sass";


const Header = (props: PropsType) => {
	const {url, theme, setTheme} = props;
	const socialIconSize = 32;
	const socialIconRound = true;

	const switchModeOnChange = () => {
		setTheme();
	};

	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.header__inner}>
					<svg className="logo" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="logo__text" d="M12.132 45.028c-.072.216-.252.432-.54.648-.264.216-.612.324-1.044.324h-5.04c-.456 0-.84-.132-1.152-.396-.288-.288-.456-.612-.504-.972L.72 21.7v-.108c0-.216.072-.396.216-.54a.793.793 0 01.576-.252h6.192c.48 0 .864.144 1.152.432.312.288.492.648.54 1.08l1.152 11.016 2.088-5.724c.072-.24.24-.468.504-.684.288-.24.648-.36 1.08-.36h2.448c.432 0 .78.12 1.044.36.288.216.468.444.54.684l2.088 5.724 1.152-11.016c.048-.432.216-.792.504-1.08.312-.288.708-.432 1.188-.432h6.192c.216 0 .396.084.54.252a.682.682 0 01.252.54v.108l-3.132 22.932c-.048.36-.228.684-.54.972-.288.264-.66.396-1.116.396h-5.04c-.432 0-.792-.108-1.08-.324-.264-.216-.432-.432-.504-.648l-3.312-7.596-3.312 7.596zm45.346-9.432c0 3.672-1.224 6.384-3.672 8.136-2.424 1.752-5.664 2.628-9.72 2.628-4.056 0-7.308-.876-9.756-2.628-2.424-1.752-3.636-4.488-3.636-8.208v-4.248c0-2.448.576-4.476 1.728-6.084 1.176-1.632 2.772-2.832 4.788-3.6 2.016-.768 4.308-1.152 6.876-1.152 2.568 0 4.848.384 6.84 1.152 2.016.768 3.612 1.956 4.788 3.564 1.176 1.608 1.764 3.624 1.764 6.048v4.392zm-17.064.684c0 .984.324 1.74.972 2.268.672.528 1.572.792 2.7.792 1.128 0 2.016-.264 2.664-.792.672-.552 1.008-1.32 1.008-2.304v-5.688c0-.984-.336-1.74-1.008-2.268-.648-.552-1.536-.828-2.664-.828-1.128 0-2.028.264-2.7.792-.648.528-.972 1.284-.972 2.268v5.76zm46.75 8.604a.714.714 0 01.072.324.793.793 0 01-.252.576.733.733 0 01-.54.216h-8.172c-.336 0-.648-.084-.936-.252a1.493 1.493 0 01-.576-.648l-3.168-7.128h-3.024v7.056a.934.934 0 01-.288.684.934.934 0 01-.684.288H61.82a.934.934 0 01-.684-.288.934.934 0 01-.288-.684V21.772c0-.264.096-.492.288-.684a.934.934 0 01.684-.288h14.004c2.16 0 4.044.348 5.652 1.044 1.632.696 2.88 1.704 3.744 3.024.864 1.32 1.296 2.868 1.296 4.644 0 3.264-1.26 5.628-3.78 7.092l4.428 8.28zM75.068 31.312c.528 0 .936-.168 1.224-.504.288-.36.432-.804.432-1.332s-.144-.984-.432-1.368c-.264-.408-.672-.612-1.224-.612h-4.5v3.816h4.5zM101.55 20.8c4.056 0 7.296.876 9.72 2.628 2.448 1.752 3.672 4.464 3.672 8.136v3.672c0 3.744-1.212 6.48-3.636 8.208-2.4 1.704-5.652 2.556-9.756 2.556H90.066a.934.934 0 01-.684-.288.934.934 0 01-.288-.684V21.772c0-.264.096-.492.288-.684a.934.934 0 01.684-.288h11.484zm.18 18.18c1.128 0 2.016-.264 2.664-.792.672-.552 1.008-1.32 1.008-2.304v-4.968c0-.984-.336-1.74-1.008-2.268-.648-.552-1.536-.828-2.664-.828h-3.276v11.16h3.276zM159.288 20.8c.264 0 .492.096.684.288.192.192.288.42.288.684v23.256a.934.934 0 01-.288.684.934.934 0 01-.684.288h-7.416a.934.934 0 01-.684-.288.934.934 0 01-.288-.684V37.36h-7.2v7.668a.934.934 0 01-.288.684.934.934 0 01-.684.288h-7.416c-.264 0-.492-.084-.684-.252a.977.977 0 01-.288-.72V21.772c0-.264.096-.492.288-.684a.934.934 0 01.684-.288h7.416c.264 0 .492.096.684.288.192.192.288.42.288.684v7.38h7.2v-7.38c0-.264.096-.492.288-.684a.934.934 0 01.684-.288h7.416zm29.218 0c.264 0 .492.096.684.288.192.192.288.42.288.684v5.796a.934.934 0 01-.288.684.934.934 0 01-.684.288h-7.74v16.488a.934.934 0 01-.288.684.934.934 0 01-.684.288h-7.416a.934.934 0 01-.684-.288.934.934 0 01-.288-.684V28.54h-7.74a.934.934 0 01-.684-.288.934.934 0 01-.288-.684v-5.796c0-.264.096-.492.288-.684a.934.934 0 01.684-.288h24.84zm21.082.972c.36-.648.876-.972 1.548-.972h6.588c.264 0 .492.096.684.288.192.192.288.42.288.684v23.256a.934.934 0 01-.288.684.934.934 0 01-.684.288h-6.516a.934.934 0 01-.684-.288.934.934 0 01-.288-.684v-11.16l-2.628 5.184c-.072.168-.24.36-.504.576-.264.216-.6.324-1.008.324h-2.448c-.408 0-.744-.108-1.008-.324-.264-.216-.432-.408-.504-.576l-2.628-5.184v11.16a.934.934 0 01-.288.684.934.934 0 01-.684.288h-6.516a.934.934 0 01-.684-.288.934.934 0 01-.288-.684V21.772c0-.264.096-.492.288-.684a.934.934 0 01.684-.288h6.588c.672 0 1.188.324 1.548.972l4.716 8.64 4.716-8.64zm35.806 16.848c.264 0 .492.096.684.288.192.192.288.42.288.684v5.436a.934.934 0 01-.288.684.934.934 0 01-.684.288H224.37a.934.934 0 01-.684-.288.934.934 0 01-.288-.684V21.772c0-.264.096-.492.288-.684a.934.934 0 01.684-.288h7.776c.264 0 .492.096.684.288.192.192.288.42.288.684V38.62h12.276z"/>
						<path className="logo__icon" d="M136.513 63.294l59.617-28.335c.56-.267.87-.626.87-1.003 0-.377-.316-.737-.876-1.003l-59.611-28.25c-.852-.405-2.132-.524-3.246-.306-1.114.221-1.835.737-1.835 1.309v15.578H56.978c-1.644 0-2.978.634-2.978 1.416v22.66c0 .78 1.334 1.415 2.978 1.415h74.455v15.519c0 .572.726 1.088 1.84 1.309 1.114.22 2.388.096 3.24-.31z"/>
					</svg>
					<div className={s.header__info}>
						<div className={s.header__switch}>
							<Switch
								onChange={switchModeOnChange}
								checked={theme === ThemesList.dark}
								width={60}
								onColor="#379683" offColor="#484848"
								checkedIcon={<span className={s.header__switchIcon} role="img"
								                   aria-label="moon">🌙</span>} //where emoji
								uncheckedIcon={<span className={s.header__switchIcon} role="img"
								                     aria-label="sun">🌞</span>} //where emoji
							/>
						</div>
						<div className={s.header__social}>
							<span className={s.header__socialTitle}>
								Share on social networks
							</span>
							<EmailShareButton url={url}><EmailIcon size={socialIconSize} round={socialIconRound}/></EmailShareButton>
							<FacebookShareButton url={url}><FacebookIcon size={socialIconSize} round={socialIconRound}/></FacebookShareButton>
							<LinkedinShareButton url={url}><LinkedinIcon size={socialIconSize} round={socialIconRound}/></LinkedinShareButton>
							<RedditShareButton url={url}><RedditIcon size={socialIconSize} round={socialIconRound}/></RedditShareButton>
							<TelegramShareButton url={url}><TelegramIcon size={socialIconSize} round={socialIconRound}/></TelegramShareButton>
							<TwitterShareButton url={url}><TwitterIcon size={socialIconSize} round={socialIconRound}/></TwitterShareButton>
							<ViberShareButton url={url}><ViberIcon size={socialIconSize} round={socialIconRound}/></ViberShareButton>
							<WhatsappShareButton url={url}><WhatsappIcon size={socialIconSize} round={socialIconRound}/></WhatsappShareButton>
							<VKShareButton url={url}><VKIcon size={socialIconSize} round={socialIconRound}/></VKShareButton>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;