import { NextFunction, Request, Response } from "express";
import sendMail from "../../mail";

export const galleryItems = async (_request: Request, response: Response) => {
  const result = [
    {
      description: "A description",
      price: 1000.42,
      src: "https://images.pexels.com/photos/2167395/pexels-photo-2167395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Name of art piece",
    },
    {
      description: "a description",
      price: 1000.42,
      src: "https://cdn.tutsplus.com/cdn-cgi/image/width=1200/psd/uploads/legacy/0576_Greek_Statue/final.jpg",
      title: " a name",
    },
    {
      description: "Placeholder Image",
      price: 1000.42,
      src: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*bQU5tpVvN6wEdqNv.jpg",
      title: "the name of the piece",
    },
  ];
  return response.status(200).json({data: result, message: "Success"});
};

export const contact = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    await sendMail(request.body);
    return response.status(200).json({ message: "Email sent!" });
  } catch (error: any) {
    return response.status(error.responseCode).json({ message: "Failed to send email" });
  }
};

export default {
  galleryItems,
  contact,
};
