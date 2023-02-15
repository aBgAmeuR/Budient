require('dotenv').config();

export const config = {
  MONGO_URI: process.env.MONGO_URI || '',
  PORT: process.env.PORT || '',
};
