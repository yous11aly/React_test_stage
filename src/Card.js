import React from "react" 
import "./Card.css" 

import thumbs_up from "./thumbs-up.svg"
import thumbs_down from "./thumbs-down.svg"
import trash from "./trash.svg"

class Card extends React.Component {

    /*create_Cards(){
        return this.props.cards_list.map((cards_list) => {
            return (
                <li>cards_list.id</li>
            );
        });
    }*/

    render() {
        return (
        <div className = "card">
            <div className="image-container">
                <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>

            <div className="description">    
                <h5 className="title">
                Lorem Ipsum est un texte d'espace...
                </h5>
                <strong className="category">category</strong>
            </div>

            <div className="actions">
                <div className="left">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-down"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>
                    </button>
                </div>
                <div className="right">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>
                </div>

            </div>
        </div>
        );
    }

  /*function mapDataToCards(state) {
      return {
        cards_list : state.cards_list
      };
  }*/


}
export default Card;
