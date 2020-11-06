import React from "react";
import SHOP_DATA from "./Shop.data";
import CollectionPreview from "../../components/Collection-Preview/CollectionPreview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state = {
      collections: SHOP_DATA,
    };
  }
  //Filter methid
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
