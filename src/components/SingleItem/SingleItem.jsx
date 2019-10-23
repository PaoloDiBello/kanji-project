import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ReactPlayer from "react-player";
import { Button } from "@material-ui/core";

import itemsActions from "../../redux/items/actions";

import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

const { getSingleItem } = itemsActions;



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%"
  },
  media: {
    width: "200px",
    height: "200px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const SingleItem = ({ match, item, loading, getSingleItem, history }) => {
   
    const {
      params: { item: paramItem }
    } = match;
  
    const encondedKanji = encodeURIComponent(paramItem);
  
    React.useEffect(() => {
      getSingleItem(encondedKanji, history);
    }, [getSingleItem, encondedKanji, history]);
  
    if (item.kanji) {
      var kanjiObject = item.kanji;
      var {
        character,
        meaning: { english },
        strokes,
        onyomi,
        kunyomi,
        video,
        examples
      } = kanjiObject;

      var {romaji:romajiOnyomi, katakana} = onyomi; 
      var {romaji:romajiKunyomi, hiragana} = kunyomi;

      //    var {kanji: {character, meaning: {english: meaningEnglish}, stokes: {count: numStrokes}}}= item;
      //  var {kanji: {onyomi: {romaji:romajiOnyomi, katakana}, kunyomi: {romaji:romajiKunyomi, hiragana}}} = item
  }
   
  const [startVideo, setStartVideo] = React.useState(false) 

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          item?<Avatar aria-label="recipe" className={classes.avatar}>
            {character}
          </Avatar>:<Skeleton variant="rect" width={210} height={118} />
          }
        title={english}
        subheader={strokes?`Strokes: ${strokes.count}`:<Skeleton/>}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.kanji?(`onyomi: ${katakana} (${romajiOnyomi})`): <Skeleton/>}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {item.kanji?(`kunyomi: ${hiragana} (${romajiKunyomi})`): <Skeleton/>}
        </Typography>
      </CardContent>

        <ReactPlayer
          url={item.kanji?video.mp4:``}
          playing
          controls={startVideo}
        />
          
     <Button variant="contained" color="primary" className={classes.button} onClick={()=>setStartVideo(!startVideo)}>
        Show controls
      </Button>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Examples:</Typography>


{item?(item.examples.map(example=>{
    {example.japanese}
})):<></>
}
          <Typography>
          "japanese": "一番（いちばん）",
          "english": "number one"
          </Typography>

          <Typography>

          "japanese": "一度（いちど）",
          "english": "once"
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


const mapStateToProps = state => ({
    item: state.Items.item,
    loading: state.Items.loadingItem
  });
  
  const mapDispatchToProps = {
    getSingleItem
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleItem);
  
