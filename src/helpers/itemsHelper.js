import SuperFetch from './superFetch';

/**
 * it contains all the functions for async calls needed by sagas for items
 * @typedef {class} ItemsHelper
 */
class ItemsHelper {

    getItems = async () => {

        return await SuperFetch.get('search/advanced/')
            .then(response => {
                //console.log('response', response)
                if (response.error) {
                    //notification({ type: 'error', message: `${response.error}`, description: '' });
                }
                return response;
            })
    }

    getSingleItem = async (name) => {

        return await SuperFetch.get(`kanji/${name}`)
            .then(response => {
                //console.log('response', response)
                if (response.error) {
                    //notification({ type: 'error', message: `${response.error}`, description: '' });
                }
                return response;
            })
    }



}

const itemsHelper = new ItemsHelper();

export default itemsHelper;
