const { default: mongoose } = require('mongoose');
const Mongoose=require('mongoose');
const Schema=Mongoose.Schema;
const AddressesSchema=new Schema({
    longitude:{
        type:Mongoose.Schema.Types.Decimal128,
        required:true
    },
    latitude:{
        type:Mongoose.Schema.Types.Decimal128,
        required:true
    },
    TypeOfAddress:{
        type:String
    },
    FlatNo:{
        type:String,
        required:true,
    }

})
const ClientSchema= new Schema({
    UserName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:[
        AddressesSchema
    ],
    MobileNo:{
        type:Number,
        
    },
    CurrentActiveAddress:{
        longitude: {
            type: Mongoose.Schema.Types.Decimal128,
            required: true
        },
        latitude: { // Fix the property name here
            type: Mongoose.Schema.Types.Decimal128,
            required: true
        },
        TypeOfAddress: {
            type: String,
            required:true
        },
        FlatNo: {
            type: String,
            required: true,
        }
    }
})
module.exports=mongoose.model('client',ClientSchema);