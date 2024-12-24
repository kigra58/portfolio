import { ENDPOINTS } from "../utils/constant";
import axiosInstance from "../utils/httpRequest";

interface IResponse{
  data:any;
  config:{
    url:string
  }
}




export const getBasicDetails=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.DETAILS.replace(":id",userId));
};

export const getAddress=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.ADDRESS.concat(`?user_id=${userId}`));
};


export const getProfileImage=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.IMAGE.concat(`?user_id=${userId}`));
};
export const getProfestionDetails=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.EXPERIENCE.concat(`?user_id=${userId}`));
};

export const getSummary=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.SUMMARY.concat(`?user_id=${userId}`));
};

export const getProfesionalLinks=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.PROFESIONALLINKS.concat(`?user_id=${userId}`));
};


export const getEducation=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.EDUCATION.concat(`?user_id=${userId}`));
};

export const getProjectDetails=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.PROJECTS.concat(`?user_id=${userId}`));
};


export const getSkills=(userId:string):Promise<IResponse> =>{
  return axiosInstance.get(ENDPOINTS.SKILLS.concat(`?user_id=${userId}`));
};
