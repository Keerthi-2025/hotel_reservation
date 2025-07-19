import { json } from "express";
import ErrorHandler from "../error/error.js";
//import {Reservation} from "./models/reservationSchema.js";
import { Reservation } from "../models/reservationSchema.js"; // ✅




    try {
        await Reservation.create(firstName, lastName,email, phone, date, time);
        res.status(200).json({
            success:true,
            message:"Reservation sent successfully",
        });
    } catch (error) {
        if(error.name === "ValidationError"){
            const ValidationError = Object.values(error.errors).map(
                (err) => err.message
            );
            return next(new ErrorHandler(ValidationError.join(" , "),400));
        }
        
    }return next(error);
};
