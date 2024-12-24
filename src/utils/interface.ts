interface Address{
    id:number
    city:string,
    state:string,
    // country:string,
    // zip:string,
    user_id:number
}

interface ProfesionalLinks{
    id:number
    title:string
    url:string,
    user_id:string
}

export interface Experience{
    id:number
    user_id:number
    description:string,
    profile:string,
    start_date:Date;
    end_date:Date;
    location:string;    
}

interface Skills{
    id:number;
    title:string;
    level:number;
}

interface Education{
    id:number;
    user_id:number;
    institute:string;
    start_date:Date;
    end_date:Date;
    course:string;
    degree:string;
}

interface Projects{
    id:number;
    title:string
    description:string;
    url:string;
    technology :string
    user_id:number
}

export interface Template{
    id:number
    type:string
}


export interface IUser{
    id:number;
    name:string,
    username:string,
    email:string,
    phone:string,
    address: Address,
    profile:string,
    image:string,
    profesional:ProfesionalLinks[],
    summary:string,
    profesional_links:ProfesionalLinks[]
    education:Education[],
    experience:Experience[],
    template:Template[],
    project:Projects[],
    skills:Skills[]
}

