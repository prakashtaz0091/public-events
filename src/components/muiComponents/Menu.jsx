import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShareIcon from '@mui/icons-material/Share';


import {
    EmailShareButton, EmailIcon,
    WhatsappShareButton, WhatsappIcon,
    FacebookMessengerShareButton, FacebookMessengerIcon
} from "react-share"



export default function BasicMenu({exactLocation}) {


    const [shareLink, setShareLink] = React.useState(exactLocation)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

                style={{color:"white"}}
            >
                <ShareIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <MenuItem > */}
                <WhatsappShareButton
                    url={shareLink}
                >
                    <WhatsappIcon style={{ height: "30px" }} />
                </WhatsappShareButton>
                <FacebookMessengerShareButton
                    url={shareLink}

                >
                    <FacebookMessengerIcon style={{ height: "30px" }} />
                </FacebookMessengerShareButton>
                <EmailShareButton
                    url={shareLink}

                >
                    <EmailIcon style={{ height: "30px" }} />
                </EmailShareButton>
                {/* </MenuItem> */}

            </Menu>
        </div>
    );
}