import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async, (req, req) => {
  res.status(200).json({
    message: "ok",
  });
});
  