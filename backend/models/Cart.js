const Mongoose=require('mongoose');
const Schema=Mongoose.Schema;
const CartItemSchema=new Schema({
    FoodName:{
        type:String,
        required:true
    },
    Quantity:{
        type:Number,
        required:true
    }
})
const CartSchema=new Schema({
UserId:{
    type:Schema.Types.ObjectId,
    required:true
},
HotelName:{
    type:String
},
HotelId:{
    type:Schema.Types.ObjectId,
},
Items:[
    CartItemSchema
],
Cost:{
    type:Mongoose.Schema.Types.Decimal128,
    required:true
},
Quantity:{
 type:Number,
 required:true
}
})
CartSchema.methods.addNewCart=async function(Data){
    this.HotelName=Data.HotelName;
    this.HotelId=Data.HotelId;
    this.Cost=Data.Cost*Data.Quantity;
    const itemarray=[];
     itemarray.push({FoodName:Data.FoodName,Quantity:Data.Quantity});
    this.Quantity= await Quantity(this.Quantity, Data.Quantity);
    this.Items=itemarray;
    console.log(itemarray)
    this.save();
} 
function Quantity(Quantity,NewQuanity){
    console.log(Quantity+'   '+NewQuanity)
    console.log(Quantity+NewQuanity);
   return Quantity+ +NewQuanity;
}
CartSchema.methods.updateCart=async function(Data){
    console.log('yes');
    const  Cart=[...this.Items];
    const index=  await this.Items.findIndex(item=>{
        return item.FoodName===Data.FoodName;
    });
    console.log(index);
    console.log('ierf');
    let cost=Data.Quantity*Data.Cost;
    if(index!=-1)
    {
        const exisiting=Cart[index].Quantity;
        this.Quantity=+this.Quantity - +Cart[index].Quantity;
        Cart[index].Quantity= Data.Quantity;
        console.log('ierf');
        this.Cost= +this.Cost.toString() - +exisiting*Data.Cost;
        
    }
    else{
        Cart.push({FoodName:Data.FoodName,Quantity:Data.Quantity});
    }
    this.Quantity=this.Quantity+ +Data.Quantity;
    this.Items=Cart;
         this.Cost= +this.Cost.toString()+ +cost;
         return  this.save();
}
CartSchema.methods.DeleteCart=async function(Data){
  
    this.items=[];
    this.Quantity=0;
    this.Cost=0;
    this.HotelName='';
    this.FoodName=null;
         return   await this.save();
}
module.exports=Mongoose.model('Cart',CartSchema);