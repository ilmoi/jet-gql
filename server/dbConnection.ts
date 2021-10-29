import mongoose, {Schema} from "mongoose";

export const schema = new Schema({
  name: String,
  fields: {
    version: Number,
    index: Number,
    exponent: Number,
    market: String,
    pythOraclePrice: String,
    pythOracleProduct: String,
    tokenMint: String,
    depositNoteMint: String,
    loanNoteMint: String,
    vault: String,
    feeNoteVault: String,
    dexSwapTokens: String,
    dexOpenOrders: String,
    dexMarket: String,
    reserved0: [Number],
    config: {
      utilizationRate1: Number,
      utilizationRate2: Number,
      borrowRate0: Number,
      borrowRate1: Number,
      borrowRate2: Number,
      borrowRate3: Number,
      minCollateralRatio: Number,
      liquidationPremium: Number,
      manageFeeCollectionThreshold: String,
      manageFeeRate: Number,
      loanOriginationFee: Number,
      liquidationSlippage: Number,
      reserved0: Number,
      liquidationDexTradeMax: String,
      reserved1: [Number],
    },
    reserved1: [Number],
    state: [Number],
  }
}, {timestamps: true});

export async function connectDb() {
  //running mongodb - https://www.bmc.com/blogs/mongodb-docker-container
  await mongoose.connect('mongodb://localhost:27017/jet')
  const Reserve = mongoose.model('Reserve', schema)
  return Reserve
}

// connectDb()
