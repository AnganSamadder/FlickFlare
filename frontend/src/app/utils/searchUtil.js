
const firestore = require('../firebaseConfig.js');

// Reference Firestore collection
const collectionName = 'movie';
const collectionRef = firestore.collection(collectionName);

async function search(searchString) {

    try {
        // Query documents where any field contains the search string
        const querySnapshot = await collectionRef.get();

        const matchingDocumentIds = [];
        querySnapshot.forEach(doc => {//Iterate through each doc
            const title=doc.data()["title"].substring(0,searchString.length);//shorten title to searchString length
            if(title.toLowerCase().localeCompare(searchString.toLowerCase())==0){
                matchingDocumentIds.push(doc.id);
            }
        });
        if(matchingDocumentIds.length==0){
            console.log("No Matching Results");
        }
        return matchingDocumentIds;
    } catch (error) {
        console.error('Error searching documents:', error);
        throw error;
    }
}

module.exports = search;