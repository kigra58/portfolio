export interface IAddress{
    id:number
    city:string,
    state:string,
    // country:string,
    // zip:string,
    user_id:number
}

export interface IImages {
    id: number;
    url: string;
    user_id: number;
  }
  

export interface IProfesionalLinks{
    id:number
    title:string
    url:string,
    user_id:string
}

export interface IExperience{
    id:number
    user_id:number
    description:string,
    company:string,
    title:string,
    start_date:Date;
    end_date:Date;
    location:string;    
}

export interface IBasicDetails {
    id: number;
    name: string;
    email: string;
    phone: string;
    profile:string;
  }

export interface ISkills{
    id:number;
    title:string;
    level:number;
}

export interface IUserSummary {
    id: number;
    title: string;
    user_id: string; 
  }

export interface IEducation{
    id:number;
    user_id:number;
    institute:string;
    start_date:Date;
    end_date:Date;
    course:string;
    degree:string;
}

export interface IProjects{
    id:number;
    title:string
    description:string;
    url:string;
    technology :string
    user_id:number
}

export interface ITemplate{
    id:number
    type:string
}


export interface IUser{
    id:number;
    name:string,
    username:string,
    email:string,
    phone:string,
    address: IAddress,
    profile:string,
    image:string,
    profesional:IProfesionalLinks[],
    summary:string,
    profesional_links:IProfesionalLinks[]
    education:IEducation[],
    experience:IExperience[],
    template:ITemplate[],
    project:IProjects[],
    skills:ISkills[]
}

