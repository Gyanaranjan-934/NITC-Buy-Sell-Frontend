import React,{ useContext } from "react";
import MyItemCard from "./MyItemCard";
import ProductContext from "../context/product/ProductContext";

const MyListItemsCollection = ({ searchParam }) => {
  // this datafile just pasted here for testing

  const {allProducts,allCategories} = useContext(ProductContext)


  const items = allProducts

  // const items = [
  //   {
  //     id: 1,
  //     name: "phone",
  //     categoryId: "electronics",
  //     description:
  //       "samsung mobilepho naaa ejkbviehbvei khblWFVA SDJVVAHFVAW kfbvaiv ihbvahvf ajhvahfv hsbliahf jhfvahfv  ahvihf   jewhfvjawf ajhvaj ahvaf ajhdvaufvh aa igfaioyrf ajhvagf ajhvajgr ajvafg jsdfvajf jqhvdqufvq qjhvqkufv qjvquhfvq jsvdquwfvrq qjwvquwrhfv jhvqjgvq qjwvquorgv qvqurwgfv qjvqurgvf jqvqiurv qjvfqiurgvf qwvqiurfvyu  jdfvajsgf javfajfv jasdhvajv jahvausgf ejgcutk ugckjgck xkhfckjgcjg ckhfcjm bjgckhfckj u gckuc jyxjyfx jhhnfjyx llllll l l     l   lllll ll lllll llllllllll aaaaaaaaaa aaa aaaaaa aaaa ayyyyy yyyy yyyyyy yyyyyaaa aaaaaaaaaaaaaaaab bb bbbbbbb bbbbbb bbbbbccc cc cccccccc ccccccccc cddddddd d ddddd dd dddddddee eee eeeeeeeeeeeeeee fff ffffffff fffff ffffffffff fg gggggggg  gg gggg ggggg",
  //     sellerId: "m210662ca",
  //     condition:
  //       "samsung mobilephon ejgcutk ugckjgck xkhfckjgcjg ckhfcjm bjgckhfckj u gckuc jyxjyfx jhhnfjyx llllll l l     l   lllll ll lllll llllllllll aaaaaaaaaa aaa aaaaaa aaaa ayyyyy yyyy yyyyyy yyyyyaaa aaaaaaaaaaaaaaaab bb bbbbbbb bbbbbb bbbbbccc cc cccccccc ccccccccc cddddddd d ddddd dd dddddddee eee eeeeeeeeeeeeeee fff ffffffff fffff ffffffffff fg gggggggg  gg gggg ggggg",
  //     createdAt: "",
  //     price: "10000",
  //   },
  //   {
  //     id: 2,
  //     name: "mattress",
  //     categoryId: "furniture",
  //     description: "sleepwell mattress",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "1000",
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //   },
  // ];
  // const soldItems = [
  //   {
  //     id: 1,
  //     name: "phone",
  //     categoryId: "electronics",
  //     description:
  //       "samsung mobilepho naaa ejkbviehbvei khblWFVA SDJVVAHFVAW kfbvaiv ihbvahvf ajhvahfv hsbliahf jhfvahfv  ahvihf   jewhfvjawf ajhvaj ahvaf ajhdvaufvh aa igfaioyrf ajhvagf ajhvajgr ajvafg jsdfvajf jqhvdqufvq qjhvqkufv qjvquhfvq jsvdquwfvrq qjwvquwrhfv jhvqjgvq qjwvquorgv qvqurwgfv qjvqurgvf jqvqiurv qjvfqiurgvf qwvqiurfvyu  jdfvajsgf javfajfv jasdhvajv jahvausgf ejgcutk ugckjgck xkhfckjgcjg ckhfcjm bjgckhfckj u gckuc jyxjyfx jhhnfjyx llllll l l     l   lllll ll lllll llllllllll aaaaaaaaaa aaa aaaaaa aaaa ayyyyy yyyy yyyyyy yyyyyaaa aaaaaaaaaaaaaaaab bb bbbbbbb bbbbbb bbbbbccc cc cccccccc ccccccccc cddddddd d ddddd dd dddddddee eee eeeeeeeeeeeeeee fff ffffffff fffff ffffffffff fg gggggggg  gg gggg ggggg",
  //     sellerId: "m210662ca",
  //     condition:
  //       "samsung mobilephon ejgcutk ugckjgck xkhfckjgcjg ckhfcjm bjgckhfckj u gckuc jyxjyfx jhhnfjyx llllll l l     l   lllll ll lllll llllllllll aaaaaaaaaa aaa aaaaaa aaaa ayyyyy yyyy yyyyyy yyyyyaaa aaaaaaaaaaaaaaaab bb bbbbbbb bbbbbb bbbbbccc cc cccccccc ccccccccc cddddddd d ddddd dd dddddddee eee eeeeeeeeeeeeeee fff ffffffff fffff ffffffffff fg gggggggg  gg gggg ggggg",
  //     createdAt: "",
  //     price: "10000",
  //     buyer_id: "m210694ca",
  //     final_price: "100",
  //     purchase_date: "",
  //     isReviewed: 0,
  //   },
  //   {
  //     id: 2,
  //     name: "mattress",
  //     categoryId: "furniture",
  //     description: "sleepwell mattress",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "1000",
  //     buyer_id: "m210694ca",
  //     final_price: "100",
  //     purchase_date: "",
  //     isReviewed: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //     buyer_id: "m210694ca",
  //     final_price: "100",
  //     purchase_date: "",
  //     isReviewed: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //     buyer_id: "m210694ca",
  //     final_price: "100",
  //     purchase_date: "",
  //     isReviewed: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //     buyer_id: "m210694ca",
  //     final_price: "100",
  //     purchase_date: "",
  //     isReviewed: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //     buyer_id: "m210694ca",
  //     final_price: "100",
  //     purchase_date: "",
  //     isReviewed: 0,
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //     buyer_id: "m210694ca",
  //     final_price: "100",
  //     purchase_date: "",
  //     isReviewed: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "umbrella",
  //     categoryId: "others",
  //     description: "samsung umbrella",
  //     sellerId: "m210662ca",
  //     condition: "new",
  //     createdAt: "",
  //     price: "100",
  //     buyer_id: "m210694ca",
  //     final_price: "100",
  //     purchase_date: "",
  //     isReviewed: 0,
  //   },
  // ];

  const categories = allCategories;
  return (
    <div className="flex justify-center max-w-[1380px] my-0 mx-auto">
      {/* here fetch data from database, and put them all in card one by one using for loop */}

      {/* fetch data */}

      {items.length === 0 ? (
        <div>
          <p>No items available</p>
        </div>
      ) : (
        // sold + unsold items dono bhejenge
        // with different props
        // and accordingly, map all of them to the cards
        <div className="flex flex-col justify-center max-w-[1380px] my-0">
          {
            // unsold items
            items.map((item) => (
              <MyItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.categoryId}
                description={item.description}
                sellerId={item.sellerId}
                condition={item.condition}
                createdAt={item.createdAt}
                price={item.price}
                categories={categories}
              />
            ))
          }
          {/* {
            // sold items
            // need to handle the parameters, will do that at the time of backend integration
            // buyer_id:'m210694ca', final_price: '100', purchase_date: ''
            soldItems.map((item) => (
              <MyItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                category={item.categoryId}
                description={item.description}
                sellerId={item.sellerId}
                condition={item.condition}
                createdAt={item.createdAt}
                price={item.price}
                buyer_id={item.buyer_id}
                final_price={item.final_price}
                purchase_date={item.purchase_date}
                isReviewed={item.isReviewed}
              />
            ))
          } */}
        </div>
      )}
    </div>
  );
};

export default MyListItemsCollection;
