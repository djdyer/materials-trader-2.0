import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Listing({ listingData }) {
    console.log("listing", listingData);

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Grid container>
                {listingData.listings.map((listing) => (
                    <Grid key={listing._id} item xs={12} p={0} m={1}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        //get username initials and random color
                                        sx={{ bgcolor: red[500] }}
                                        aria-label="recipe"
                                    >
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                //material does not generate what we want
                                title={listing.material}
                                subheader={listing.location}
                            />
                            <Link to="/listing/{listing.id}">
                                {/* eventually we want cloudinary */}
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={`../../assets/images/${listing.material}_upload.jpeg`}
                                    //fix listing.material
                                    alt={listing.material}
                                />
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {listing.description}
                                        {listing.amount}
                                    </Typography>
                                </CardContent>
                            </Link>

                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse
                                in={expanded}
                                timeout="auto"
                                unmountOnExit
                            >
                                <CardContent>Comments Section</CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Listing;
