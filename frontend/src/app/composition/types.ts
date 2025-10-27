export interface Alert {

    duration?: number;
    onClose?:()=>void;
};

export interface AlertProps {

    type: "sucess" | "error" | "warning";
    message: string;
    duration?: number;

};
