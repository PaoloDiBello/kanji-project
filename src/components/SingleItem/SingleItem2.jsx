import React, { useEffect } from "react";

import itemsActions from "../../redux/items/actions";

import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

const { getSingleItem } = itemsActions;

const SingleItem = ({ match, item, loading, getSingleItem, history }) => {
  const {
    params: { item: paramItem }
  } = match;

  const encondedKanji = encodeURIComponent(paramItem);

  useEffect(() => {
    getSingleItem(encondedKanji, history);
  }, [getSingleItem, encondedKanji, history]);

  if (item.kanji) {
    var kanjiObject = item.kanji;
    var {
      character,
      meaning: { english },
      /*strokes,
      onyomi,
      kunyomi,*/
      item
    } = kanjiObject;

    //    var {kanji: {character, meaning: {english: meaningEnglish}, stokes: {count: numStrokes}}}= item;
    //  var {kanji: {onyomi: {romaji:romajiOnyomi, katakana}, kunyomi: {romaji:romajiKunyomi, hiragana}}} = item
  }

  if (!loading && item.kanji) {
    return (
      <div>
        {english}
        {character}
        <img src={item.poster} alt="" style={{ maxWidth: "50px" }} />
      </div>
    );
  } else {
    return (
      <>
        <Skeleton width="40%" />
        <Skeleton width="40%" />
      </>
    );
  }
};

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
