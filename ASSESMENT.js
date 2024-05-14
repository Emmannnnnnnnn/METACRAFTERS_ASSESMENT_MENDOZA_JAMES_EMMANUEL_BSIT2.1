/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _age, _birthPlace, _birthMonth) {
   const NFT = {
      "Name": _name,
      "Age": _age,
      "BirthPlace": _birthPlace,
      "BirthMonth": _birthMonth
   }
   NFTs.push(NFT);
   console.log("My Name is " + _name);
   console.log("I am " + _age);
   console.log("I born in " + _birthPlace);
   console.log("I born on " + _birthMonth);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0; i < NFTs.length; i++) {
      console.log("\nName: " + NFTs[i].name);
      console.log("Age: " + NFTs[i].age);
      console.log("BirthPlace: " + NFTs[i].birthPlace);
      console.log("BirthMonth: " + NFTs[i].birthMonth);
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log(NFTs.length);
}

// call your functions below this line
mintNFT("James", "20 years old", "Bacolod", "January");
listNFTs();
getTotalSupply();
