const Client = require('../models/client')
const Cart = require('../models/Cart')
exports.getCart = (req, res, next) => {
    const id = req.params.userid;
    Cart.findOne({ UserId: id })
        .then(cart => {
            res.json({ status: '200', Cart: cart });
        })
        .catch(err => {
            console.log(err);
            res.json({ statsu: '202', message: "Error in Getting you Registered try after few Minutes" });
        })
}
exports.addToCart = (req, res, next) => {
    const id = req.params.client;
    const hotelid=req.params.hotelid;
    console.log('cart')
    const allow = req.query.allow;
      console.log(allow);
    const Data = {
        HotelId: req.params.hotelid,
        HotelName: req.body.Data.hotelname,
        FoodName: req.body.Data.FoodName,
        Quantity: req.body.Data.Quantity,
        Cost: req.body.Data.Price
    }
    console.log(Data);
    Cart.findOne({ UserId: id })
        .then(cart => {
            console.log(cart)
            if (cart.Items.length === 0) {
                console.log('empty cart');
                cart.addNewCart(Data)
                .then(carts => {
                    res.json({ status: '200', message: 'item added successfully' })
                })
            }
            else {
                console.log(cart.HotelId+'   '+hotelid)
                if (cart.HotelId.toString()!==hotelid.toString()) {
                    console.log('yewdqefrgs');
                    if (allow==='true') {
                        cart.DeleteCart()
                        .then(carts=>{
                         cart.addNewCart(Data)
                            .then(carts => {
                                res.json({ status: '200', message: 'item added successfully' })
                            })}
                        )
                    }
                    else
                    res.json({ status: '203', message: 'Hotel Name Different' });
                }
                else {
                    console.log('updatingcart')
                    cart.updateCart(Data)
                        .then(carts => {
                            res.json({ status: '200', message: 'item added successfully' })
                        })
                }
            }
        }
        )
        .catch(err => {
            console.log(err);
            res.json({ status: '204', message: 'Hotel Name Different' });
        })
}