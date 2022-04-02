import "./styles.css";

import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";

DataBusiness.getCharacters().then(datos => {
  const nodeBad = [];
  for(let characterCount of datos){
    const node = Utils.createCharacterRow(characterCount);
    node.onclick = function(){
      Utils.showCharacter(characterCount);
    }
    nodeBad.push(node);
  }
  for(let enumera of nodeBad){
    document.getElementById('root').append(enumera); 
  }
})