const { Schema, model }= require('mongoose');

const vanSchema = new Schema(
    {
        individualName: {
            type: String,
            
        },
        companyName: {
            type: String,
            
        },
        companySignupCode: {
            type: String,
            
        },
        type: {
            typr: String,
        },
        driverName: {
            type: String,
            
        }, /// { type: Schema.Types.ObjectId, ref: 'Rider' },
        driverIdNumber: {
            type: String,
            
        },
        driverDrivingLicense: {
            type: String,
            
        },
        vanPlateNumber: {
            type: String,
            
        },
        vehicleLicense: {
            type: String,
            
        },
        hackenypermit: {
            type: String,
            
        },
        roadWorthiness: {
            type: String,
            
        },
        insurance: {
            type: String,
            
        },
        comprehensiveInsurance: {
            type: String,
        },
        goodsOnly: {
            type: String,
            
        },
        ikdUnifiedByePass: {
            type: String,
            
        },
        GITInsurance: {
            type: String,
            
        },
        allocationOfPlateNumber: {
            type: String,
            
        },
        otherDocuments: {
            type: String,
        },

        additionalInformation: {
            type: String,
        },
},

{
    timestamps: true,
  }
);

// email: {
//     type: String,
//     
//   },

const Van = model('Vans', vanSchema);

module.exports = Van;