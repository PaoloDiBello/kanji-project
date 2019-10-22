import React, { useEffect } from 'react'

import itemsActions from '../../redux/items/actions'

import { connect } from 'react-redux'

const {getSingleItem} = itemsActions

const SingleItem = ({match:{params:{item: paramItem}}, item, loading, getSingleItem}) => {
    

const encondedKanji = encodeURIComponent(paramItem);

    useEffect(() => {
        getSingleItem(encondedKanji);
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
            </div>
        )
    } else {
        return "loading..."
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
