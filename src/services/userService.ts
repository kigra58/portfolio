import { API_URLS } from "../utils/constant";
import axiosInstance from "../utils/httpRequest";

interface IResponse{
  data:any;
  config:{
    url:string
  }
}




export const getBasicDetails=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.DETAILS.replace(":id",userId));
};

export const getAddress=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.ADDRESS.concat(`?user_id=${userId}`));
};


export const getProfile=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.PROFILE.concat(`?user_id=${userId}`));
};

export const getProfileImage=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.IMAGE.concat(`?user_id=${userId}`));
};
export const getProfestionDetails=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.PROFESIONAL.concat(`?user_id=${userId}`));
};

export const getSummary=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.SUMMARY.concat(`?user_id=${userId}`));
};

export const getProfesionalLinks=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.PROFESIONALLINKS.concat(`?user_id=${userId}`));
};


export const getEducation=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.EDUCTION.concat(`?user_id=${userId}`));
};

export const getProjectDetails=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.PROJECTS.concat(`?user_id=${userId}`));
};


export const getSkills=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(API_URLS.SKILLS.concat(`?user_id=${userId}`));
};
