import { Data } from "../models/data.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { apiResponse } from "../utils/apiResponse.js";

const setData = asyncHandler(async (req, res) => {
    try {
    //   const existingData = await Data.find({});
    // if (existingData && existingData.length > 0) {
    //   console.log("Data already exists in the database");
    //   return res.status(200).json(new apiResponse(200, "Data already exists", { data: existingData }));
    // }





      const resk = await fetch("https://api.wazirx.com/api/v2/tickers");
      
    
      if (!resk.ok) {
        console.log("kfhdkf")
        throw new Error(`API request failed with status ${resk.status}`);
      }
  
      const result = await resk.json(); 
      const topTen = Object.values(result).slice(0, 10); 
  
      if (!topTen || topTen.length === 0) {
        throw new Error("No data found in the API response.");
      }
      
      const storeData = await Data.insertMany(topTen);
      
      return res.status(201).json(new apiResponse(201, {data: storeData },'Data stored successfully',));
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  });
  


const getData = asyncHandler(async (req, res) => {
  try {

    let data = await Data.find({});
  
    console.log(data)
    if (!data || data.length === 0) {
     setData()
     data = await Data.find({});
    }

    return res.status(200).json(new apiResponse(
       200,
       data,
    ));

  } catch (error) {
    console.error(error);
    return res.status(400).json(new ApiError(400, error.message));
  }
});

export { getData, setData };
