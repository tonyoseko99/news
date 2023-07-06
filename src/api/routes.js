import axios from "axios";

// GET request for news articles from newsapi.org
const NEWS_API_KEY = "8d8d51e07d8d40078290e6f9a8c68ed4";

// headlines
export const getHeadlines = async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// sports
export const getSports = async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${NEWS_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// science
export const getScience = async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${NEWS_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// technology
export const getTechnology = async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${NEWS_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// search
export const getSearch = async (query) => {
  try {
    const { q } = query;
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${q}&apiKey=${NEWS_API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

