import React, { useEffect } from 'react'

import itemsActions from '../../redux/items/actions'

import { connect } from 'react-redux'
import { Link } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

import Spinner from '../Spinner.jsx'


const {getSingleItem} = itemsActions

const SingleItem = ({match, item, loading, getSingleItem, history}) => {
    

const {params:{item: paramItem}} = match;

const encondedKanji = encodeURIComponent(paramItem);

    useEffect(() => {
        getSingleItem(encondedKanji, history);
    }, [getSingleItem, encondedKanji])



if(item.kanji){

    var kanjiObject = item.kanji;
    var {character, meaning: {english}, strokes, onyomi, kunyomi, video} = kanjiObject;


//    var {kanji: {character, meaning: {english: meaningEnglish}, stokes: {count: numStrokes}}}= item;  
  //  var {kanji: {onyomi: {romaji:romajiOnyomi, katakana}, kunyomi: {romaji:romajiKunyomi, hiragana}}} = item
}


    if(!loading){
        return (
            <div>
                {english}
                {character}

                <img></img>
                <Link
                  component="button"
                  variant="body2"
                  display="block"
                  onClick={() => {
                    history.push(`/`);
                  }}
                >
                  Go home
                </Link>

            </div>
        )
    } else {
        return (<><Spinner/><Skeleton width="40%"/><Skeleton width="40%"/></>)
    }

}


    const mapStateToProps = (state) => ({
        item: state.Items.item,
        loading: state.Items.loadingItem
    })

    
const mapDispatchToProps = {
    getSingleItem
}



export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)
